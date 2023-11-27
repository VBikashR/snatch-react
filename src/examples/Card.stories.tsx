import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import ReportIssue from "./Cards/ReportIssue";
import Rating from "./Cards/Rating";
import Payment from "./Cards/Payment";
import Notification from "./Cards/Notification";
import Datepicker from "../components/Datepicker/Datepicker";

import { Card, CardContent } from "../components/Card/Card";
import Label from "../components/Label/Label";
import Cookies from "./Cards/Cookies";

export default {
  component: Card,
} as Meta<typeof Card>;

export const exmaple1 = () => (
  <>
    <Card
      style={{
        padding: "2rem",
        display: "grid",
        gap: "0.5rem",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <div>
        <div style={{ width: 500 }}>
          <Payment />
        </div>
        <br />
        <div style={{ width: 500 }}>
          <Rating />
        </div>
        <br />

        <div style={{ width: 500 }}>
          <Cookies />
        </div>
        <br />
      </div>
      <div>
        <div style={{ width: 500 }}>
          <ReportIssue />
        </div>
        <br />
        <div style={{ width: 500 }}>
          <Notification />
        </div>
        <br />
        <div style={{ width: 500 }}>
          <Card>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                paddingTop: "1.5rem",
                gap: "0.5rem",
              }}
            >
              <Label>Pick a date</Label>
              <Datepicker />
            </CardContent>
          </Card>
        </div>
      </div>
    </Card>
  </>
);

exmaple1.storyname = " something";
