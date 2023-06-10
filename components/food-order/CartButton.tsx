import CartIcon from "../../assets/CartIcon.tsx";
import AccentButton from "../../islands/AccentButton.tsx";

//? Define Cart Button properties
interface CartButtonProperties {
  pulseState: boolean;
  openModal: () => void;
  totalItems: number;
  cost: number;
}

//? Renders a cart button that will open the cart modal
export default function CartButton({
  pulseState,
  openModal,
  totalItems,
  cost,
}: CartButtonProperties) {
  return (
    <AccentButton
      //? Adds the pulsing animation when a food item is added
      style={pulseState ? "animation: animate-pulse 0.3s ease-in-out;" : ""}
      onClickFunction={openModal}
    >
      <span class="flex items-center mr-4 space-x-1">
        {
          /* Islands can't render children directly, they need to be
         rendered as the result of a function instead */
        }
        {CartIcon({ iconHeight: "1em", iconWidth: "1em" })}
        <span>
          {totalItems}
        </span>
      </span>
      <span>${cost.toFixed(2)}</span>
    </AccentButton>
  );
}
