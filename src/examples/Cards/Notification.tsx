import React, { useState } from "react";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
// Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/Card/Card";
import styled from "styled-components";

export type NotiProps = {
  icons: React.ReactNode;
  title: string;
  label: string;
};

const notiOptions = [
  {
    key: 0,
    icon: <FontAwesomeIcon icon={faBell} />,
    title: "Everything",
    label: "Email digest, mentions & all activity.",
  },
  {
    key: 1,
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Available",
    label: "Only mentions and comments.",
  },
  {
    key: 2,
    icon: <FontAwesomeIcon icon={faEyeSlash} />,
    title: "Ignoring",
    label: "Turn off all notifications.",
  },
];
const StyledNoticard = styled.div<NotiProps & { isSelected: boolean }>`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.isSelected ? "#e5e7eb" : "transparent"};
  border-radius: 0.375rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  &:hover {
    background-color: #e5e7eb;
  }
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
  color: #94a3b8;
`;

const NotiCard = ({
  icons,
  title,
  label,
  isSelected,
  onSelect,
}: NotiProps & { isSelected: boolean; onSelect: () => void }) => {
  return (
    <StyledNoticard
      icons
      title={title}
      label={label}
      isSelected={isSelected}
      onClick={onSelect}
    >
      {icons}
      <Styledtext>
        {title}
        <Styledp>{label}</Styledp>
      </Styledtext>
    </StyledNoticard>
  );
};

const Notification = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what you want to be notified about
          </CardDescription>
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
          {notiOptions.map((option, index) => (
            <NotiCard
              key={index}
              icons={option.icon}
              title={option.title}
              label={option.label}
              isSelected={selectedOption === index}
              onSelect={() => handleSelect(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Notification;
