import React from "react";
import { round } from "../scripts/utils";

const LinkWithStars = ({ name, url, rating }) => (
  <span>
    {" "}
    &nbsp;| &nbsp; <a href={url}>{name}</a> <b>{round(rating)}</b> 🌟
  </span>
);

export default ({ data }) =>
  data.map(({ name, description, options }) => (
    <div key={name}>
      <hr />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={name} />
        <div style={{ marginLeft: "1.5rem" }}>
          <h3>
            <a
              id={name}
              className="anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-"
            />
            {name}
          </h3>
          <p
            style={{ marginBottom: 0 }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div>
            <b>Source Code:</b>
            {options.map((props, i) => (
              <LinkWithStars key={i} name={name} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
