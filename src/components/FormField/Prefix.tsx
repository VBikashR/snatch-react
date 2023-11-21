import React from "react";
import FieldAffix, { FieldAffixProps } from "../Private/FieldAffix";

/** A prefix to display before an input within a form field. */
export default function Prefix({
  children,
  small,
  large,
  disabled,
}: FieldAffixProps) {
  return (
    <FieldAffix before small={small} large={large} disabled={disabled}>
      {children}
    </FieldAffix>
  );
}
