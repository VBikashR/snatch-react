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
    if (props.onSelectItem) {
      props.onSelectItem(value, item, event);
    }

    if (!value || (!item && !selectUnknownOnEnter)) {
      return;
    }

    setValues((prevValues) => {
      const newValues = new Set(prevValues).add(value);
      onChange && onChange(Array.from(newValues), event!);
      return newValues;
    });
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
    >
      {Array.from(values).length > 0 && (
        <div>
          {Array.from(values).map((value) => (
            <React.Fragment key={value}>
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
