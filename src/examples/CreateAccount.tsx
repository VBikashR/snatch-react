import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
//Form
import FormWrapper from "../form/FormWrapper";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/Card/Card";
import Text from "../components/Text/Text";
import Button from "../components/Button/Button";
import FormInput from "../form/Private/FormInput";
import FormSelect from "../form/Private/FormSelect";
import FormTextarea from "../form/Private/FormTextarea";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: FormData) => {
    const formData = Object.fromEntries(data);
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];
        console.log(`Key: ${key}, Value: ${value}`);
      }
    }

    setLoading(true);
    setTimeout(() => {
      //Reset the form
      setEmail("");
      setPassword("");
      setAccount("");
      setComment("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div style={{ width: 400 }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ marginBottom: 0 }}>Create an account</CardTitle>
            <CardDescription style={{ margin: 0 }}>
              Enter your email below to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormWrapper className="" onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "0.5rem",
                  gap: "0.5rem",
                }}
              >
                <Button
                  beforeIcon={<FontAwesomeIcon icon={faGithub} />}
                  variant={"outline"}
                  size={"large"}
                  block
                >
                  Github
                </Button>
                <Button
                  beforeIcon={<FontAwesomeIcon icon={faGoogle} />}
                  variant={"outline"}
                  size={"large"}
                  block
                >
                  Google
                </Button>
              </div>
              <div style={{ textAlign: "center" }}>
                <Text muted micro uppercased>
                  or continue with
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <FormInput
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  label="Email"
                  value={email}
                  rules={{
                    required: true,
                    minLength: 2,
                    pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
                  }}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  value={password}
                  rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 15,
                    pattern: "yes",
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <FormSelect
                  id="account-type"
                  name="account-type"
                  label="Account type"
                  placeholder="Select the account type"
                  value={account}
                  rules={{ required: true }}
                  onChange={setAccount}
                >
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="temp">Temp</option>
                </FormSelect>
                <FormTextarea
                  id="comment"
                  name="comment"
                  label="Comment"
                  value={comment}
                  cols={10}
                  rows={10}
                  rules={{ required: true }}
                  onChange={(event) => setComment(event.target.value)}
                />
                <Button type="submit" loading={loading}>
                  Create account
                </Button>
              </div>
            </FormWrapper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAccount;
