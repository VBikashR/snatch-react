import React from "react";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faApple } from "@fortawesome/free-brands-svg-icons";
// Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";

const payOption = [
  {
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    label: "Card",
    selected: false,
  },
  {
    icon: <FontAwesomeIcon icon={faPaypal} />,
    label: "Paypal",
    selected: false,
  },
  {
    icon: <FontAwesomeIcon icon={faApple} />,
    label: "Apple",
    selected: true,
  },
];

const PaymentCard = ({
  icon,
  label,
  selected,
}: {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
}) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 2.5rem",
        cursor: "pointer",
        border: selected ? "1px solid #161717" : "1px solid transparent",
      }}
    >
      {icon}
      <Text micro>{label}</Text>
    </Card>
  );
};

const Payment = () => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Add a new payment method to your account
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {payOption.map((option, index) => (
            <PaymentCard
              key={index}
              icon={option.icon}
              label={option.label}
              selected={option.selected}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Input
            label="Name"
            type="text"
            name="text"
            placeholder="First Last"
          />
          <Input label="Card number" type="number" name="number" />
          <Button block>Continue</Button>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr)",
              gap: "1rem",
            }}
          >
            <Select placeholder="Month" label="Expires">
              <option>January</option>
              <option>February</option>
              <option>March</option>
            </Select>
            <Select placeholder="Year" label="Year">
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </Select>
            <Input label="CVC" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payment;
