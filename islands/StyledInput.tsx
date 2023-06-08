//? Validation values for typecasting
import InformationIcon from "../assets/InformationIcon.tsx";
import { validationStatus } from "../types/validationStatus.ts";

//? Define optional and required properties for inputs
interface StyledInputProperties {
  //? Text for the label related to this input
  label: string;
  //? Key that helps Preact to track this input on the DOM
  key: string;
  //? Whether this input is a file, image, text, number or anything else
  //! Reference: https://www.w3schools.com/tags/tag_input.asp
  inputType: string;
  //? Tracks the validation reference state for this input
  validationReference: validationStatus;
  //? Input name, helps Screenreaders to connect label+input
  name: string;
  //? Placeholder text to display on input, if relevant
  placeholder?: string;
  //? If this field should have automatic focus on page load
  autoFocus?: boolean;
  //? Initial/current value for this input
  value: string;
  //? Function that updates the input state when typing in the input field
  inputFunction: (input: string) => void;
  //? String to be turned into a RegExp. Don't enclose with forward slashes (/)!
  validationFunction: (input: string | number) => validationStatus;
  //? Mininum and maximum values for numerical inputs
  min?: number | string;
  max?: number | string;
  //? Optional string to be used on the optional help Information icon
  helpInformation?: string;
}

//? Exports a styled combo of label + input
//! Requires form.css! Will organize in column on smaller
//! resolutions and as row on larger resolutions
export default function StyledInput(
  {
    label,
    key,
    inputType,
    validationReference,
    name,
    placeholder,
    autoFocus,
    value,
    inputFunction,
    validationFunction,
    min,
    max,
    helpInformation,
  }: StyledInputProperties,
) {
  return (
    <>
      <div class="label-wrapper">
        <label class="styled-label" htmlFor={name}>
          {label}
        </label>
        <div class="helper">
          <input
            //? Assigns this input as required
            required
            //? Unique key to allow Preact to know which node gets removed
            key={key}
            //? The type of this input (file, number, text, date, etc)
            //! Reference: https://www.w3schools.com/tags/tag_input.asp
            type={inputType}
            //? Base class + validation class if needed
            class={"base-form-style styled-input" +
              (validationReference === validationStatus.Valid
                ? " valid-input"
                : validationReference === validationStatus.Invalid
                ? " invalid-input"
                : "")}
            name={name}
            //? Placeholder value, if provided
            placeholder={placeholder}
            //? If this
            autofocus={autoFocus}
            //? Initial value for the input, mostly used by the number input
            //! Gets updated by onInput()
            value={value}
            //? Updates the value on typing
            onInput={(e) => {
              const { target } = e;
              if (target) {
                const changedValue = (target as HTMLInputElement).value;
                inputFunction(changedValue);
              }
            }}
            //? Validates the input when the input loses focus
            onBlur={() => {
              validationFunction(value);
            }}
            //? Mininum and maximum thresholds for numerical values
            min={min}
            max={max}
          />
          {/* Tooltip on the right side, with user information about what data is valid */}
          {helpInformation && (
            <div class="tooltip">
              {/* Information icon */}
              <InformationIcon iconHeight="1.8em" iconWidth="1.8em" />
              <span class="tooltiptext">{helpInformation}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
