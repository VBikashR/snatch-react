import React, {
  useState,
  useRef,
  FC,
  ChangeEvent,
  MouseEvent,
  FocusEvent,
} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Loader from "../Loader/Loader";
import Menu, { MenuItem, MenuRow } from "../Menu/Menu";

import Input from "../Input/Input";
import { Alert, AlertDescription, AlertTitle } from "../Alert";

export type Item = {
  disabled?: boolean;
  href?: string;
  id?: string | number;
  name?: string;
  title?: string;
  value?: string | number;
};

export type ItemResponseType<T> = T[] | { items?: T[]; results?: T[] };

export type AutocompleteProps<T extends Item = Item> = {
  accessibilityLabel: string;
  children?: React.ReactNode;
  onLoadItems: (value: string) => Promise<ItemResponseType<T>>;
  onSelectItem?: (
    value: string,
    item: T | null,
    event?: React.SyntheticEvent<HTMLElement>
  ) => void;
  placeholder?: string;
  onSuggestionSelected?: (selectedValue: any) => void;
};

export type AutocompleteState<T extends Item = Item> = {
  error: Error | null;
  highlightedIndex: number | null;
  id: string;
  items: T[];
  loading: boolean;
  open: boolean;
  value: string;
};

const Autocomplete: FC<AutocompleteProps> = <T extends Item = Item>({
  accessibilityLabel,
  onLoadItems,
  onSelectItem = () => {},
  placeholder,
  onSuggestionSelected,
  ...fieldProps
}: AutocompleteProps<T>) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  // const [autocompleteState, setAutocompleteState] = useState<
  //   AutocompleteState<T>
  // >({
  //   error: null,
  //   highlightedIndex: null,
  //   id: "",
  //   items: [],
  //   loading: false,
  //   open: false,
  //   value: "",
  // });

  // const { error, highlightedIndex, id, items, loading, open, value } =
  //   autocompleteState;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowSuggestions(true);
    onSuggestionSelected && onSuggestionSelected(event);
  };

  const renderLoading = () => <MenuRow>{<Loader inline />}</MenuRow>;

  const renderError = (error: Error) => (
    <MenuRow>
      {
        <Alert variant={"destructive"}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      }
    </MenuRow>
  );

  return (
    <div style={{ display: "block", position: "relative" }}>
      <Input
        role="checkbox"
        value={inputValue}
        aria-autocomplete="list"
        // aria-expanded={open}
        autoComplete="off"
        type="search"
        onChange={handleInputChange}
      />
      {showSuggestions && (
        <Menu>
          {renderLoading()}

          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default Autocomplete;
