//? Types for typecasting
import { stimulusCheckboxOptions } from "../types/stimulusCheckboxOptions.ts";
//? Validation values for typecasting
import { validationStatus } from "../types/validationStatus.ts";
import StyledSingleCheckbox from "./StyledSingleCheckbox.tsx";

//? Every checkbox item needs to have a name and an associated
//? value to enable changing its state
type CheckboxItem = {
  name: string;
  value: string;
};

//? Properties required to build a Checkbox input
interface CheckboxGroupProperties {
  label: string;
  //? Tracks the validation reference state for this input
  validationReference: validationStatus;
  optionsArray: Array<CheckboxItem>;
  stateForCheckedReference: Record<string, boolean>;
  onChangeFunction: (name: stimulusCheckboxOptions) => void;
}

//? Exports a styled select with label and options
export default function StyledCheckboxGroup({
  label,
  optionsArray,
  validationReference,
  stateForCheckedReference,
  onChangeFunction,
}: CheckboxGroupProperties) {
  return (
    <div class="radio-label-inputs-group">
      <span class="radio-label">
        {label}
      </span>
      <div
        class={"base-form-style radio-input-group" +
          (
            validationReference === validationStatus.Invalid
              ? " invalid-input"
              : ""
          )}
      >
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map(({ value, name }: CheckboxItem) => (
          <>
            <StyledSingleCheckbox
              label={name}
              shouldBeChecked={stateForCheckedReference[value] === true}
              onChangeFunction={() => {
                onChangeFunction(value as stimulusCheckboxOptions);
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
}
