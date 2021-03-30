import ExecutionEnvironment from "@docusaurus/core/lib/client/exports/ExecutionEnvironment";
import React from "react";

const Footer = () => {
  if (ExecutionEnvironment.canUseDOM) {
    import("@sway-me/ui-kit/sway-ui");
    return (
      <div
        dangerouslySetInnerHTML={{ __html: "<sway-footer></sway-footer>" }}
      />
    );
  }
  return null;
};

export default Footer;
