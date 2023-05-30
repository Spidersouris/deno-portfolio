//? Properties required to build a Radio input
interface RadioProperties {
  label: string;
  name: string;
  starterValue: string;
  optionsArray: Array<string>;
  onChangeFunction: (value: string) => void;
}

//? Exports a styled select with label and options
export default function StyledRadio({
  label,
  name,
  starterValue,
  optionsArray,
  onChangeFunction,
}: RadioProperties) {
  return (
    <div class="radio-label-inputs-group">
      <span class="radio-label">
        {label}
      </span>
      <div className="radio-input-group">
        {/* Programatically creates radio inputs from array of strings provided */}
        {optionsArray.map((radio) => (
          <>
            {/* Label for what this is for */}
            <label class="styled-label">
              {/* Radio */}
              <input
                class="styled-radio"
                type="radio"
                name={name} //? Links all radio options together
                value={radio} //? Tracks current value
                checked={radio === starterValue} //? Track if this option should be checked
                //? Updates state when an option is clicked
                onChange={(e) => {
                  const { target } = e;
                  if (target) {
                    const changedValue = (target as HTMLInputElement).value;
                    onChangeFunction(changedValue);
                  }
                }}
              >
              </input>
              {radio}
            </label>
          </>
        ))}
      </div>
    </div>
  );
}
