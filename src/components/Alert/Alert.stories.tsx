import { Meta } from "@storybook/react";
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ReactComponentLibrary/Alert",
  component: Alert,
} as Meta<typeof Alert>;

export const primary = () => (
  <div
    style={{
      padding: 24,
      display: "flex",
    }}
  >
    <div
      style={{
        width: 900,
      }}
    >
      <Alert variant={"default"}>
        <FontAwesomeIcon icon={faRocket} />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <p>This is a default alert.</p>
        </AlertDescription>
      </Alert>
    </div>
  </div>
);

primary.storyName = "Alert in default style";

export const secondary = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 500,
      }}
    >
      <Alert variant={"destructive"}>
        <FontAwesomeIcon icon={faRocket} />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  </div>
);

secondary.storyName = "Alert in descructive style";
