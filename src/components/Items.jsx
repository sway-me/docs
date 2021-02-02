import React from "react";
import { flattenAndSort } from "../scripts/utils";

const LinkWithStars = ({ name, link, stars }) => (
  <span>
    {" "}
    &nbsp;| &nbsp; <a href={link}>{name}</a> <b>{stars}</b> 🌟
  </span>
);

export default ({ data }) =>
  flattenAndSort(data).map(({ name, description, sourceUrls }) => (
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
