import React, { useState } from "react";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";
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
import { Menu, MenuItem, MenuRow } from "../../components/Menu";
import Seperator from "../../components/Seperator/Seperator";
import Text from "../../components/Text/Text";

const Rating = () => {
  const [value, setValue] = useState("");

  const handleOnClickInside = (event: MouseEvent) => {
    // Pass the state updater function to the callback
    const clickedElement = event.target as HTMLElement;
    const textContent = clickedElement.textContent;
    if (textContent) {
      setValue(textContent);
    }
    console.log("RATING: ", textContent);
  };

  return (
    <Card>
      <CardHeader
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 110px",
          alignItems: "center",
          gap: "4px",
          marginTop: 0,
        }}
      >
        <div style={{ marginTop: "2px" }}>
          <CardTitle>SnatchReact/lib</CardTitle>
          <CardDescription>
            Beautifully designed components using styled components designed
            components using styled components
          </CardDescription>
          <Text bold>{value}</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown
            triggerInfo={"Star"}
            beforeIcon={<FontAwesomeIcon icon={faStar} />}
            afterIcon={<FontAwesomeIcon icon={faAngleDown} />}
            alignment={"right"}
            onClickInside={handleOnClickInside}
          >
            <Menu accessibilityLabel="action menu">
              <MenuRow spacious>Suggested Lists</MenuRow>
              <Seperator />
              <MenuItem>Future Ideas</MenuItem>
              <MenuItem>My Stack</MenuItem>
              <MenuItem>Inspiration</MenuItem>
              <Seperator />
              <MenuItem icon={<FontAwesomeIcon icon={faPlus} />}>
                Create item
              </MenuItem>
            </Menu>
          </Dropdown>
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

export default Rating;
