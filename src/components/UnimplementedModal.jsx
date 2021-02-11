import React, { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
// eslint-disable-next-line import/no-unresolved
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const localStorage = ExecutionEnvironment.canUseDOM
  ? window.localStorage
  : null;
const Content = ({ href }) => (
  <div className="modal-container">
    <div className="modal-overlay" />
    <div className="modal-content">
      <div
        style={{
          display: "flex",
          padding: "0.5rem",
          justifyContent: "space-around",
        }}
      >
        <div />
        <h5
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            alignSelf: "center",
            textTransform: "uppercase",
            letterSpacing: "0.2rem",
          }}
        >
          😭 Unimplemented
        </h5>
        <b style={{ cursor: "pointer" }}>❎</b>
      </div>
      <hr style={{ padding: 0, margin: 0 }} />
      <p style={{ padding: "1rem" }}>
        This feature has not been implemented. If you&apos;d like to contribute,
        we would love your help! 😍 <br /> <br />
        Check out our{" "}
        <a rel="noreferrer" target="_blank" href={href}>
          backlog. 🚀
        </a>
      </p>
    </div>
  </div>
);

export default function UnimplementedModal({ href }) {
  const [isScrollable, setIsScrollable] = useState(false);
  let storedState;
  if (ExecutionEnvironment.canUseDOM) {
    storedState = JSON.parse(localStorage.getItem(href));
  }
  return (
    !false &&
    !false && (
      <RemoveScroll
        onClick={() => {
          setIsScrollable(true);
          if (ExecutionEnvironment.canUseDOM) {
            localStorage.setItem(href, "true");
          }
        }}
      >
        <Content {...{ isScrollable, href }} />
      </RemoveScroll>
    )
  );
}
