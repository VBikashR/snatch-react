import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Autocomplete, { AutocompleteProps } from "../Autocomplete/Autocomplete";
import Chip from "../Chip/Chip";

type onRemove = (event: React.MouseEvent<HTMLElement>) => void;

function renderChip(
  value: string,
  onRemove: onRemove
): NonNullable<React.ReactNode> {
  return (
    <Chip
      onIconClick={onRemove}
      hasOnIconClick
      afterIcon={<FontAwesomeIcon icon={faCircleXmark} size={"lg"} />}
    >
      {value}
    </Chip>
  );
}

export type MulticompleteProps = AutocompleteProps &
  Omit<AutocompleteProps, "children" | "onChange" | "value"> & {
    onChange?: (
      values: string[],
      event: React.SyntheticEvent<HTMLElement>
    ) => void;
    customRenderChip?: (
      value: string,
      onRemove: onRemove
    ) => NonNullable<React.ReactNode>;
    value?: string[];
    selectUnknownOnEnter?: boolean;
  };

const Multicomplete: React.FC<MulticompleteProps> = ({
  onChange,
  customRenderChip = renderChip,
  value = [],
  selectUnknownOnEnter,
  ...props
}: MulticompleteProps) => {
  const [values, setValues] = useState<Set<string>>(new Set(value));

  const handleChange = (
    value: string,
    event: React.SyntheticEvent<HTMLElement>
  ) => {
    onChange && onChange(Array.from(values), event);
  };

  const handleSelectItem = (
    value: string,
    item: any | null,
    event?: React.SyntheticEvent<HTMLElement>
  ) => {
    const newValues = new Set(values).add(value);
    setValues(newValues);

    //   onChange && onChange(Array.from(newValues), event!);
  };

  const handleChipClick = (
    value: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    setValues((prevValues) => {
      const newValues = new Set(prevValues);
      newValues.delete(value);
      onChange && onChange(Array.from(newValues), event);
      return newValues;
    });
  };

  return (
    <Autocomplete
      {...props}
      onChange={handleChange}
      onSelectItem={handleSelectItem}
      multiselect={true}
    >
      {Array.from(values).length > 0 && (
        <div style={{ position: "absolute", marginTop: "5px" }}>
          {Array.from(values).map((value, index) => (
            <React.Fragment key={index}>
              {customRenderChip(value, () =>
                handleChipClick(value, {} as React.MouseEvent<HTMLElement>)
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </Autocomplete>
  );
};

export default Multicomplete;
