import React from "react";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faStar, faCircle } from "@fortawesome/free-regular-svg-icons";
// Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Menu } from "../../components/Menu";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";

const ReportIssue = () => {
  return (
    <Card>
      <CardHeader
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          alignItems: "center",
          gap: "4px",
          marginTop: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown
            triggerInfo={"Filters"}
            beforeIcon={<FontAwesomeIcon icon={faAngleDown} />}
            alignment={"left"}
          >
            <Menu accessibilityLabel="action menu">
              <div style={{ padding: "1rem" }}>
                <Select label="Select">
                  <option>Foo</option>
                  <option>Bar</option>
                  <option>Baz</option>
                </Select>
                <div style={{ marginTop: "1rem" }}>
                  <Checkbox label="Checkbox" description="This is a checkbox" />
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    justifyContent: "space-between",
                    gap: "2rem",
                  }}
                >
                  <Button variant={"link"} size={"small"} className="">
                    <p style={{ color: "blue", padding: 0, margin: 0 }}>
                      Apply
                    </p>
                  </Button>
                  <Button variant={"link"} size={"small"}>
                    Reset
                  </Button>
                </div>
              </div>
            </Menu>
          </Dropdown>
        </div>
        <div style={{ marginTop: "2px" }}>
          <CardTitle>Dropdown</CardTitle>
          <CardDescription>
            Dropdown that takes another components as children
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div
          style={{
            display: "flex",
            fontSize: "12px",
            color: "#64748b",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faCircle}
              color="#38bdf8"
              style={{ marginRight: "0.2rem" }}
            />
            TypeScript
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.2rem" }} />
            20k
          </div>
          <div>Updated November 2023</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportIssue;
