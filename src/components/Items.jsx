import React, { useEffect, useState } from "react";
import { flattenAndSort, round } from "../scripts/utils.mjs";

const fetchFromGitProvider = async (link) => {
  const arr = link.split("/");
  const owner = arr[arr.length - 2];
  const repo = arr[arr.length - 1];
  if (arr[2].includes("gitlab")) {
    const { star_count } = await fetch(
      `https://gitlab.com/api/v4/projects/${owner}%2F${repo}`,
      {
        cache: "force-cache",
      }
    )
      .then((res) => res.json())
      .catch(console.error);
    return star_count;
  } else {
    const { stargazers_count } = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        cache: "force-cache",
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    )
      .then((res) => res.json())
      .catch(console.error);
    return stargazers_count;
  }
};

const LinkWithStars = ({ name, link }) => {
  const [stars, setStars] = useState("");
  if (link.includes("gitlab") || link.includes("github")) {
    useEffect(() => {
      let isMounted = true;

      // fetchFromGitProvider(link)
      //   .then((stars) => {
      //     if (isMounted) setStars(round(stars));
      //   })
      //   .catch(console.error);
      return () => {
        isMounted = false;
      };
    }, [stars]);
  }
  return (
    <span>
      {" "}
      &nbsp;| &nbsp; <a href={link}>{name}</a> <b>{stars}</b> 🌟
    </span>
  );
};

export default ({ data }) => {
  return flattenAndSort(data).map(({ name, description, sourceUrls }) => (
    <div key={name}>
      <hr />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={name} />
        <div style={{ marginLeft: "1.5rem" }}>
          <h3 id={name} style={{ marginBottom: 0 }}>
            {name}
          </h3>
          <p
            style={{ marginBottom: 0 }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div>
            <b>Source Code:</b>
            {Object.keys(sourceUrls).map((key) => (
              <LinkWithStars key={key} name={key} link={sourceUrls[key]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};
