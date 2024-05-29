"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import React from "react";

const CopilotWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <CopilotKit publicApiKey="your-public-api-key">
      <div className="width-screen h-screen flex">
        {children}
        <CopilotSidebar />
      </div>
    </CopilotKit>
  );
};

export default CopilotWrapper;
