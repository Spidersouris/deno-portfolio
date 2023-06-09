//? Import the StyledButton to close the modal on empty carts or
//? confirm orders on a filled cart
import MinusIcon from "../../assets/MinusIcon.tsx";
import PlusIcon from "../../assets/PlusIcon.tsx";
import XMarkIcon from "../../assets/XMarkIcon.tsx";
import StyledButton from "../../islands/StyledButton.tsx";
//? Import the functions that will update the Cart state
import {
  deleteItemFromCart,
  increaseCartItemByOne,
  reduceCartItemByOne,
} from "../../services/food-order/updateFoodOrder.ts";
//? Import types for typecasting
import type { foodCartItemsMap } from "../../types/food-order/foodCartItemsMap.ts";
import type { updateCartFunction } from "../../types/food-order/updateCartFunction.ts";

//? Define Cart Modal properties
interface CartModalProperties {
  closeModal: () => void;
  updateCartFunction: updateCartFunction;
  items: foodCartItemsMap;
  cost: number;
}

//? Exports the content of the cart modal that will either display the
//? information about the cart being empty or a list with all cart items
export default function CartModal({
  closeModal,
  updateCartFunction,
  items,
  cost,
}: CartModalProperties) {
  //? If no items are in the cartContent, return a simple "empty cart" message
  if (items.size === 0) {
    return (
      <div class="food-cart-content">
        <span class="food-cart-content__header">
          No items in your cart yet!
        </span>
        <StyledButton
          style="align-self: end;"
          text="Close"
          onClickFunction={closeModal}
        />
      </div>
    );
  }

  //? Destructure the cart items to render them one by one in a list
  const cartItems = [...items];

  //? Return the cart items and the total
  return (
    <div class="food-cart-content">
      {/* Modal header */}
      <span class="food-cart-content__header">Items in cart</span>
      {/* List of items in cart */}
      <ol>
        {cartItems.map(([foodName, { quantity, cost }]) => (
          <li class="flex flex-col">
            <div class="flex justify-between items-center">
              {/* Cart item name */}
              <h3 class="text-xl">
                {foodName}
              </h3>
              {/* Remove item completely from cart */}
              <span
                class="hover:cursor-pointer"
                onClick={() => {
                  deleteItemFromCart({
                    foodName,
                    foodQuantity: quantity,
                    foodCost: cost,
                    updateCartFunction,
                  });
                }}
              >
                {/* XMark SVG */}
                <XMarkIcon
                  iconHeight="1.5em"
                  iconWidth="1.5em"
                  iconFillColor="red"
                  iconStrokeColor="var(--neutral-color)"
                  iconStrokeWidth="30"
                />
              </span>
            </div>
            {/* Update cart item count */}
            <div class="mt-2 inline-flex items-center self-end">
              {/* Decrease item count. If last item, remove it from the cart */}
              <span
                class="mr-2 hover:cursor-pointer"
                onClick={() => {
                  reduceCartItemByOne({
                    foodName,
                    foodCost: cost,
                    updateCartFunction,
                  });
                }}
              >
                {/* Minus sign SVG */}
                <MinusIcon iconHeight="1.5em" iconWidth="1.5em" />
              </span>
              {quantity}x ${cost.toFixed(2)}
              {/* Increase item count */}
              <span
                class="ml-2 hover:cursor-pointer"
                onClick={() => {
                  increaseCartItemByOne({
                    foodName,
                    foodCost: cost,
                    updateCartFunction,
                  });
                }}
              >
                {/* Plus sign SVG */}
                <PlusIcon iconHeight="1.5em" iconWidth="1.5em" />
              </span>
            </div>
            <hr
              class="my-2 border-solid border"
              style="border-color: var(--neutral-color)"
            />
          </li>
        ))}
      </ol>
      {/* Cart total cost */}
      <span class="food-cart-content__total">Total: ${cost.toFixed(2)}</span>
      {/* Row of buttons to close or complete the order */}
      <div class="food-cart-content__button-row">
        <button
          key="modal__add-more"
          onClick={closeModal}
          title="Close the modal"
        >
          Add more
        </button>
        {
          /* <StyledButton
          style="margin-left: 1em;"
          text="Order"
          onClickFunction={closeModal}
        /> */
        }
      </div>
    </div>
  );
}
