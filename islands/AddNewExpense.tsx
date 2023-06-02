//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Responsive and styled Label + Input
import StyledInput from "./StyledInput.tsx";
//? Styled Button to confirm sending the form
import StyledButton from "./StyledButton.tsx";

//? Types for typecasting
import { validationStatus } from "../types/validationStatus.ts";
interface ExpenseFormProperties {
  addNewExpenseFunction: (
    input: { date: Date; description: string; cost: number },
  ) => void;
}

//? Validates the form's description input field
const descriptionValidation = (
  description: string,
): validationStatus.Invalid | validationStatus.Valid => {
  //? This RegEx looks for a string of 3 to 40 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^(?!.*[ -]{2}).{3,}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning 1 for
  //? valid and -1 for invalid input
  if (validation.test(description)) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
};

//? Validates the form's date input field
const dateValidation = (
  date: string,
): validationStatus.Invalid | validationStatus.Valid => {
  //? This RegEx looks for a string of 6 to 20 alphabet characters + space
  //? and dash, but will fail validation if two consecutive spaces/dashes
  //? are provided
  const regularExpression = "^\\d{4}-\\d{2}-\\d{2}$";
  //? Creates a RegEx with the expression above
  const validation = new RegExp(regularExpression);
  //? Validates the input against the RegEx, returning
  //? validationStatus.Valid or validationStatus.Invalid
  if (validation.test(date)) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
};

//? Validates the form's cost numeric input field
const costValidation = (
  cost: string,
): validationStatus.Invalid | validationStatus.Valid => {
  if (+cost >= 1) {
    return validationStatus.Valid;
  } else {
    return validationStatus.Invalid;
  }
};

//? Given a current value, initial value and a validation function, return
//? what is the state of validation of the input once the respective field
//? loses focus
function validateInput(
  value: string,
  initialState: string,
  pattern: (
    valueToValidate: string,
  ) => validationStatus.Invalid | validationStatus.Valid,
): validationStatus {
  //? If the field is at initial state, reset validation
  if (value === initialState) {
    return validationStatus.Unchanged;
  } //? If the field is not empty, check if a validation RegEx pattern was provided
  else {
    return pattern(value);
  }
}
const [timezonelessDate, timezoneDateGap] = new Date().toISOString().split("T");
const defaultFormValues = {
  description: "",
  cost: 1,
  date: timezonelessDate,
};
const defaultFormValidation = {
  description: validationStatus.Unchanged,
  cost: validationStatus.Unchanged,
  date: validationStatus.Unchanged,
};

//? Creates a form that uses RegExp validation
export default function AddNewExpenseForm(
  { addNewExpenseFunction }: ExpenseFormProperties,
) {
  //? Manages current state for form data
  const [formValues, setValues] = useState(defaultFormValues);
  //? Manages the validation of form fields
  const [formValidationStatus, updateValidation] = useState(
    defaultFormValidation,
  );
  //? Manages if there is an error text to be displayed
  const [validationError, updateValidationError] = useState(false);

  //? Runs when the user clicks the "Send" button. Validates if the data
  //? should be accepted and wiped or kept and have errors informed.
  function validateBeforeSend(): void {
    //? Initialize the number of errors variable
    let validationErrors = 0;

    updateValidation((currentValidationStatus) => ({
      ...currentValidationStatus,
      cost: validationStatus.Valid,
    }));

    //? If the description is empty or invalid, increase errors counter
    if (formValues.description === "") {
      setValues((currentValues) => ({ ...currentValues, description: "N/A" }));
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        description: validationStatus.Invalid,
      }));
      validationErrors++;
    } else if (
      validateInput(
        formValues.description,
        defaultFormValues.description,
        descriptionValidation,
      ) ===
        validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        description: validationStatus.Invalid,
      }));
    }
    //? If the cost is invalid, increase errors counter
    if (
      validateInput(
        formValues.cost.toString(),
        defaultFormValues.cost.toString(),
        costValidation,
      ) === validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        cost: validationStatus.Invalid,
      }));
    }
    //? If the date is empty or invalid, increase errors counter
    if (formValues.date === "") {
      setValues((currentValues) => ({
        ...currentValues,
        date: new Date(2020, 0, 1).toISOString().split("T")[0],
      }));
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        date: validationStatus.Invalid,
      }));
    } else if (
      validateInput(
        formValues.date,
        defaultFormValues.date,
        dateValidation,
      ) === validationStatus.Invalid
    ) {
      validationErrors++;
      updateValidation((currentValidationStatus) => ({
        ...currentValidationStatus,
        date: validationStatus.Invalid,
      }));
    }

    //? If all data is valid, add to the block below
    if (validationErrors > 0) {
      updateValidationError(true);
    } else {
      //? Reset error text and form validation
      updateValidationError(false);
      updateValidation(defaultFormValidation);

      addNewExpenseFunction({
        date: new Date(
          formValues.date + "T" + timezoneDateGap,
        ),
        description: formValues.description,
        cost: formValues.cost,
      });

      //? When valid data is submitted, reset the form so the user can
      //? try to submit more data
      setValues(() => defaultFormValues);
    }
  }

  return (
    <div class="add-new-expense">
      <h2 class="new-expense-title">
        Add new expense
      </h2>
      {/* The whole form */}
      <form class="styled-form">
        {/* Expense description */}
        <StyledInput
          key={"text_input"}
          inputType="text"
          validationReference={formValidationStatus.description}
          autoFocus={true}
          label="Description"
          name="description"
          value={formValues.description}
          inputFunction={(inputName) => {
            setValues((currentForm) => ({
              ...currentForm,
              description: inputName,
            }));
          }}
          validationFunction={() => {
            const result = validateInput(
              formValues.description,
              defaultFormValues.description,
              descriptionValidation,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              description: result,
            }));
            return result;
          }}
        />
        {/* Expense Cost */}
        <StyledInput
          key={"number_input"}
          inputType="number"
          validationReference={formValidationStatus.cost as validationStatus}
          label="Cost ($)"
          name="cost"
          value={formValues.cost.toString()}
          inputFunction={(inputAge) => {
            setValues((currentForm) => ({
              ...currentForm,
              cost: Number(inputAge),
            }));
          }}
          validationFunction={() => {
            const result = validateInput(
              formValues.cost.toString(),
              defaultFormValues.cost.toString(),
              costValidation,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              cost: result,
            }));
            return result;
          }}
          min={1}
        />
        {/* Profession input */}
        <StyledInput
          key={"date_input"}
          inputType="date"
          validationReference={formValidationStatus
            .date as validationStatus}
          label="Date"
          name="date"
          value={formValues.date}
          inputFunction={(inputDate) => {
            setValues((currentForm) => ({
              ...currentForm,
              date: inputDate,
            }));
          }}
          validationFunction={() => {
            const result = validateInput(
              formValues.date,
              defaultFormValues.date,
              dateValidation,
            );
            updateValidation((currentValidation) => ({
              ...currentValidation,
              date: result,
            }));
            return result;
          }}
        />
        <StyledButton
          text="Send"
          style="margin-top: 0.5em;"
          onClickFunction={validateBeforeSend}
        />
        {validationError === true && (
          <>
            <p style="margin-top: 0.5em;">
              Some fields have invalid data being provided (will display a red
              border), please fix them before submitting! Hover/click the
              information icon on the right side for more information.
            </p>
          </>
        )}
      </form>
    </div>
  );
}
