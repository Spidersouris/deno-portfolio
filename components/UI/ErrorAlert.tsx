interface ErrorAlertProperties {
  errorText: string;
}

//? Exports a component as wide as possible with a custom error message passed with 'errorText'
export function ErrorAlert({ errorText }: ErrorAlertProperties) {
  return (
    <div
      class="flex items-center w-full py-2 px-2 shadow-lg space-x-2 rounded-xl"
      style="background-color: rgb(255, 87, 87); color: rgb(50, 24, 22);"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        stroke="rgb(50, 24, 22)"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{errorText}</span>
    </div>
  );
}
