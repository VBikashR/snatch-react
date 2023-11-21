import React, { useState, useEffect, useRef } from "react";

import Loader from "../Loader/Loader";
import { Menu, MenuItem, MenuRow } from "../Menu/Menu";
import Input from "../Input/Input";
import { Alert, AlertDescription } from "../Alert";
import FormField from "../FormField/FormField";

//TODO - > When menu dropdown opens, move the focus to items
//TODO - > inside the container to make items selectabel using keys

export type AutocompleteProps = {
  accessibilityLabel: string;
  label?: string;
  children?: React.ReactNode;
  Options: any[];
  onSelectItem?: (
    value: string,
    item: any | null,
    event?: React.SyntheticEvent<HTMLElement>
  ) => void;
  onChange?: (value: string, event: React.SyntheticEvent<HTMLElement>) => void;
  placeholder?: string;
  onSuggestionSelected?: (selectedValue: any) => void;
  /** optional value from parent. usefull when the component is used as multi select to not display the selected value*/
  multiselect?: boolean;
};

const Autocomplete: React.FC<AutocompleteProps> = ({
  accessibilityLabel,
  children,
  multiselect = false,
  label,
  Options,
  onSelectItem = () => {},
  placeholder,
  onSuggestionSelected,
}: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [filteredSuggestion, setFilteredSuggestion] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await filteredOptions();
      setFilteredSuggestion(data);
      setLoading(false);
    };

    fetchData();
  }, [Options, inputValue]);

  // Real time filter options as per the typed value
  const filteredOptions = async () => {
    // Simulate an API call or any asynchronous operation
    return new Promise<any[]>((resolve) => {
      setTimeout(() => {
        const filteredData = Options?.filter((option: any) =>
          option?.name.toLowerCase().includes(inputValue?.toLowerCase())
        );
        resolve(filteredData);
      }, 500); // Simulating a delay of 1 second
    });
  };

  // Useref to track and close the dropdown
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick); // Use removeEventListener
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (multiselect) {
      setInputValue("");
    } else {
      setInputValue(event.target.value);
    }
    setOpen(true);
  };

  const handleItemClick = (
    item: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (multiselect) {
      setInputValue("");
    } else {
      setInputValue(item);
    }
    // setInputValue(item);
    onSuggestionSelected && onSuggestionSelected(item);
    setOpen(false);

    onSelectItem(item, null, event);
  };

  const renderLoading = () => <MenuRow>{<Loader inline />}</MenuRow>;
  const renderError = () => (
    <MenuRow>
      <Alert variant={"destructive"}>
        <AlertDescription>No such option</AlertDescription>
      </Alert>
    </MenuRow>
  );

  const renderItems = () => {
    return (
      <>
        {filteredSuggestion?.map(
          (option) =>
            option?.name !== undefined &&
            option?.value !== undefined && (
              <div
                key={option.name}
                onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                  handleItemClick(option?.value, event)
                }
              >
                <MenuItem>{option.value}</MenuItem>
              </div>
            )
        )}
      </>
    );
  };

  const renderMenu = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "110%",
          left: 5,
          right: 0,
          zIndex: 10,
        }}
      >
        <Menu ref={dropdownRef} accessibilityLabel={accessibilityLabel}>
          {loading
            ? renderLoading()
            : filteredSuggestion?.length > 0
            ? renderItems()
            : renderError()}
        </Menu>
      </div>
    );
  };

  return (
    <FormField>
      <div style={{ display: "block", position: "relative" }}>
        <Input
          role="checkbox"
          inline={"false"}
          value={inputValue}
          aria-autocomplete="list"
          // aria-expanded={open}
          autoComplete="off"
          type="search"
          onChange={handleInputChange}
          label={label}
          placeholder={placeholder}
        />

        {open && renderMenu()}
      </div>

      {children}
    </FormField>
  );
};

export default Autocomplete;
