//? Validation values for typecasting
import { validationStatus } from "../types/validationStatus.ts";

//? Properties required to build a Select dropdown
interface SelectProperties {
  name: string;
  label: string;
  validationReference?: validationStatus;
  value: string;
  optionsArray: Array<string>;
  onChangeFunction: (value: string) => void;
}

//? Exports a styled select with label and options
export default function StyledSelect({
  name,
  label,
  validationReference,
  value,
  optionsArray,
  onChangeFunction,
}: SelectProperties) {
  return (
    <div class="label-wrapper">
      {/* Label for what this is for */}
      <label class="styled-label" htmlFor={name}>
        {label}
      </label>
      {/* Select dropdown */}
      <select
        class={"styled-select" +
          (validationReference === validationStatus.Valid
            ? " valid-input"
            : validationReference === validationStatus.Invalid
            ? " invalid-input"
            : "")}
        name={name} //? Link to label
        value={value} //? Tracks current value
        //? Updates state when an option is selected
        onChange={(e) => {
          const { target } = e;
          if (target) {
            const changedValue = (target as HTMLSelectElement).value;
            onChangeFunction(changedValue);
          }
        }}
      >
        {/* Programatically creates options from array of strings provided */}
        {optionsArray.map((option) => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
}
