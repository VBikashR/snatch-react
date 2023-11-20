import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Menu, MenuItem, MenuRow } from "./Menu";
import Seperator from "../Seperator/Seperator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faGear } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ReactComponentLibrary/Menu",
  component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const version1 = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 200,
      }}
    >
      <Template accessibilityLabel="User menu">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Template>
    </div>
  </div>
);
version1.storyName = "A basic menu with menu items";

export const version2 = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 200,
      }}
    >
      <Template accessibilityLabel="User menu">
        <MenuItem>Profile</MenuItem>
        <MenuItem disabled>Settings</MenuItem>
        <Seperator />
        <MenuItem>Log Out</MenuItem>
      </Template>
    </div>
  </div>
);
version2.storyName = "With a separator and disabled item";

export const version3 = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 200,
      }}
    >
      <Template accessibilityLabel="User menu">
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem
          submenu={
            <Menu accessibilityLabel="View submenu">
              <MenuItem>Always Show Bookmarks Bar</MenuItem>
              <MenuItem>Always Show Full URLs</MenuItem>
              <Seperator />
              <MenuItem>reload</MenuItem>
              <MenuItem>Toggle Function</MenuItem>
              <Seperator />
              <MenuItem>Hide Sidebar</MenuItem>
            </Menu>
          }
        >
          View
        </MenuItem>
        <MenuItem
          submenu={
            <Menu accessibilityLabel="Profiles submenu">
              <MenuItem tip="Ctrl + A">Andy</MenuItem>
              <MenuItem tip="Cmd + S">Benoit</MenuItem>
              <Seperator />
              <MenuItem
                submenu={
                  <Menu accessibilityLabel="Edit submenu">
                    <MenuItem>Name</MenuItem>
                    <MenuItem>Email</MenuItem>
                  </Menu>
                }
              >
                Edit
              </MenuItem>
            </Menu>
          }
        >
          profiles
        </MenuItem>
      </Template>
    </div>
  </div>
);
version3.storyName = "With nested sub-menu";

export const version4 = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 200,
      }}
    >
      <Template accessibilityLabel="User menu">
        <MenuItem
          openInNewWindow
          icon={<FontAwesomeIcon icon={faUser} />}
          href="https://github.com/airbnb/lunar"
        >
          Profile
        </MenuItem>
        <MenuItem
          openInNewWindow
          icon={<FontAwesomeIcon icon={faGear} />}
          href="https://github.com/airbnb/lunar"
        >
          Settings
        </MenuItem>
        <Seperator />
        <MenuItem
          openInNewWindow
          icon={<FontAwesomeIcon icon={faKey} />}
          href="https://github.com/airbnb/lunar"
          tip="Cmd + L"
        >
          Log Out
        </MenuItem>
      </Template>
    </div>
  </div>
);
version4.storyName = "With icons, links and tips";

export const version5 = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 200,
      }}
    >
      <Template accessibilityLabel="User menu">
        <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>Profile</MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faGear} />}>Settings</MenuItem>
        <Seperator />
        <MenuItem icon={<FontAwesomeIcon icon={faKey} />} tip="Cmd + L">
          Log Out
        </MenuItem>
      </Template>
    </div>
  </div>
);
version5.storyName = "With icons and tips";

export const version6 = () => (
  <div
    style={{
      padding: 24,
    }}
  >
    <div
      style={{
        width: 200,
      }}
    >
      <Menu accessibilityLabel="User menu">
        <MenuRow spacious>
          <small>This is a row with very fat padding.</small>
        </MenuRow>
        <MenuRow>
          <small>This is a normal row.</small>
        </MenuRow>
        <MenuItem spacious>Link</MenuItem>
      </Menu>
    </div>
  </div>
);
version6.storyName =
  "With spacious padding and custom rows (rows are non interactive)";
