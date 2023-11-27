import React, { useState } from "react";

// Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/Card/Card";
import styled from "styled-components";
import Switch from "../../components/Switch/Switch";
import Button from "../../components/Button/Button";

type CookiesProps = {
  title: string;
  label: string;
  checked: boolean;
};

const cookiesOptions = [
  {
    title: "Strictly Necessary",
    label:
      "These cookies are essential in order to use the website and use its features.",
    checked: true,
  },
  {
    title: "Functional Cookies",
    label:
      "These cookies allow the website to provide personalized functionality.",
    checked: false,
  },
  {
    title: "Performance Cookies",
    label: "These cookies help to improve the performance of the website.",
    checked: true,
  },
];

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 0.5rem;
`;
const Styledtext = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 1;
`;
const Styledp = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 12px;
  color: #94a3b8;
`;

const CookiesCard = ({ title, label, checked }: CookiesProps) => {
  return (
    <StyledGrid>
      <div>
        <Styledtext>{title}</Styledtext>
        <Styledp>{label}</Styledp>
      </div>
      <Switch id={title} onChange={() => {}} checked={checked} />
    </StyledGrid>
  );
};

const Cookies = () => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Cookies Settings</CardTitle>
          <CardDescription>Manage your cookies settings here. </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {cookiesOptions.map((option, index) => (
            <CookiesCard
              key={index}
              title={option.title}
              label={option.label}
              checked={option.checked}
            />
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Button variant="tag" block>
            Save preferneces
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cookies;
