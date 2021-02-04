const { writeFileSync, readFileSync } = require("fs");

const names = JSON.parse(readFileSync("data/glossary.json").toString()).map(
  ({ name }) => name
);

// jacked:https://github.com/F1LT3R/svg-to-dataurl/blob/master/index.js, 'light'
const svgDataRule = (name, svgStr) => {
  const encoded = encodeURIComponent(svgStr)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  const header = "data:image/svg+xml,";
  return `--${name}: url("${header + encoded}") no-repeat;`;
};

const getFiles = (mode) =>
  names.map((name) => ({
    name,
    file: readFileSync(`static/nonbuild/${mode}/${name}.svg`).toString(),
  }));

const root = `
/**
 * DO NOT EDIT. This file was generated via \`yarn gen-css\`
 */
 
:root {
    ${getFiles("light")
      .map(({ name, file }) => svgDataRule(name, file))
      .join("\n\t")}
}\n`;

const theme = `
[data-theme="dark"] {
    ${getFiles("dark")
      .map(({ name, file }) => svgDataRule(name, file))
      .join("\n\t")}
}\n`;

const classes = `
${names.map((name) => `.${name} {background: var(--${name});}`).join("\n")}

${names.map((name) => `.${name}`)} {
    height: 100px;
    width: 100px;
    flex-shrink: 0;
    background-size:contain;
    background-position:center;
}`;

writeFileSync("src/css/svg.css", root + theme + classes);
