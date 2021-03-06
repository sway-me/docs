// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require("node-fetch");
const { promises, readFileSync } = require("fs");

const fetchData = (url, query) =>
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then((res) => res.json());

const fetchGitlab = async (owner, name) => {
  const gitlabQuery = `{ project(fullPath: "${owner}/${name}") { starCount }}`;
  const {
    data: {
      project: { starCount },
    },
  } = await fetchData("https://gitlab.com/api/graphql", gitlabQuery);
  return starCount;
};

const fetchGithub = async (owner, name) => {
  const gitHubQuery = `{ repository(name: "${name}", owner: "${owner}"){ stargazerCount } }`;
  const {
    data: {
      repository: { stargazerCount },
    },
  } = await fetchData("https://api.github.com/graphql", gitHubQuery);
  return stargazerCount;
};

const fetchRating = (url) => {
  const [owner, name] = url.split("/").slice(-2);
  if (url.includes("github.com")) {
    return fetchGithub(owner, name);
  }
  if (url.includes("gitlab.com")) {
    return fetchGitlab(owner, name);
  }
  return "";
};

const glossary = JSON.parse(readFileSync("data/glossary.json").toString());
const updateGlossary = async () => {
  const payload = await Promise.all(
    glossary.map(async ({ options, ...rest }) => ({
      ...rest,
      options: await Promise.all(
        options.map(async ({ rating, ...nestedRest }) => {
          const updatedRating = await fetchRating(nestedRest.url);
          return {
            ...nestedRest,
            rating: updatedRating,
          };
        })
      ),
    }))
  );
  await promises.writeFile("data/glossary.json", JSON.stringify(payload));
};

updateGlossary().then();
