import React, { FormEvent, useContext, ReactNode } from "react";
// Types
import {
  FormValidatorProps,
  FormContextProp,
  FormDataObject,
} from "./Form.types";
// Context
import { FormContext } from "./FormContext";
// Importing the passowrd validation patterns
import {
  UPPERCASE_REGEX,
  NUMBER_REGEX,
  SPECIAL_CHARS_REGEX,
} from "./PasswordValidation.utils";

// return true for element with component name
const isFormElement = (child: any) => {
  return child?.type?.displayName === "SFormElement";
};

const processFormElements = (
  children: ReactNode,
  formDataObject: FormDataObject,
  setIsInvalid: React.Dispatch<React.SetStateAction<FormDataObject>>,
  setFormError: React.Dispatch<React.SetStateAction<FormDataObject>>
) => {
  let isFormInvalid = false; // Pointer to submit form

  React.Children.forEach(children, (child) => {
    const typedChild: any = child as React.ReactElement<any>;

    if (isFormElement(typedChild)) {
      const { rules, name, value, children } = typedChild.props;
      let isElementInvalid = false;
      let error: string[] = [];
      formDataObject[name] = value;

      if (rules?.required && !value) {
        isFormInvalid = true;
        isElementInvalid = true;
        error.push("This field is required");
        // console.log(`Loop 1 for ${name} is: `, isElementInvalid);
      } else if (
        rules &&
        rules.minLength &&
        value.toString().length < rules.minLength
      ) {
        isFormInvalid = true;
        isElementInvalid = true;
        error.push(`Length should be more than ${rules.minLength} char`);
      } else if (
        rules &&
        rules.maxLength &&
        value.toString().length > rules.maxLength
      ) {
        isFormInvalid = true;
        isElementInvalid = true;
        error.push(`Length should be less than ${rules.maxLength} char`);
      } else if (rules?.pattern) {
        const validationRules =
          name === "password"
            ? [
                { label: "Atleast one uppercase", pattern: UPPERCASE_REGEX },
                { label: "Atleast one number", pattern: NUMBER_REGEX },
                {
                  label: "Atleast one special char",
                  pattern: SPECIAL_CHARS_REGEX,
                },
              ]
            : [
                {
                  label: `Invalid ${name}`,
                  pattern: new RegExp(rules?.pattern),
                },
              ];

        error = validationRules
          .map((rule) => {
            const isRuleViolated = !value.match(rule.pattern);
            if (isRuleViolated) {
              isFormInvalid = true;
              isElementInvalid = true;
              return rule.label;
            }
            return undefined;
          })
          .filter((item): item is string => item !== undefined);
      }

      // Update context
      setIsInvalid((prevState) => ({
        ...prevState,
        [name]: isElementInvalid,
      }));

      setFormError((prevState) => ({
        ...prevState,
        [name]: error,
      }));

      // Check if the child has further children
      if (children) {
        const childIsValid = processFormElements(
          children,
          formDataObject,
          setIsInvalid,
          setFormError
        );

        // If any child is invalid, set the current element as invalid
        if (childIsValid) {
          isFormInvalid = true;
        }
      }
    } else if (React.Children.count(typedChild?.props?.children) > 0) {
      // eslint-disable-next-line
      const childIsValid = processFormElements(
        typedChild.props.children,
        formDataObject,
        setIsInvalid,
        setFormError
      );

      // If any child is invalid, set the current element as invalid
      if (childIsValid) {
        isFormInvalid = true;
      }
    }
  });
  return isFormInvalid;
};

const FormValidator: React.FC<FormValidatorProps> = ({
  children,
  onSubmit,
  className,
  ...props
}) => {
  const { setIsInvalid, setFormError } =
    useContext<FormContextProp>(FormContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formDataObject: FormDataObject = {};

    // Process SnrFormElement components and their descendants
    const isInvalid = processFormElements(
      children,
      formDataObject,
      setIsInvalid,
      setFormError
    );

    // if isValid is true, submit the form with the FormData object
    if (!isInvalid) {
      const formData = new FormData();

      // Convert formDataObject into FormData
      for (const key in formDataObject) {
        formData.append(key, formDataObject[key]);
      }
      // Call the onSubmit callback with the FormData
      onSubmit(formData);
      // Clear form-related state
      setIsInvalid({});
      setFormError({});
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={className} {...props}>
      {children}
    </form>
  );
};

export default FormValidator;
