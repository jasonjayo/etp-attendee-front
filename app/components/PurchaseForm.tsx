import { Button, Checkbox, Label, TextInput } from "flowbite-react";

import { useDispatch } from "react-redux";
import { setProcessing, setComplete } from "../../store/purchaseSlice";
import type { AppDispatch } from "../../store/store";

export default function PurchaseForm({ price }: { price: number | undefined }) {
  const dispatch: AppDispatch = useDispatch();

  function submitForm() {
    dispatch(setProcessing());
    setTimeout(() => {
      dispatch(setComplete());
    }, 3000);
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <div>
      <div
        className="text-center p-3 my-3 cursor-pointer rounded flex flex-row items-center justify-center"
        style={{ background: "#ffd140" }}
        onClick={submitForm}
      >
        Pay with
        <img
          className="inline-block w-20 ms-2"
          src={`${basePath}/images/PayPal.png`}
          alt="PayPal "
        />
      </div>
      <div
        className="text-center text-white cursor-pointer p-3 my-3 rounded flex flex-row items-center justify-center"
        style={{ background: "#635bff" }}
        onClick={submitForm}
      >
        Pay with
        <img
          className="inline-block w-14 ms-2 "
          src={`${basePath}/images/stripe.svg`}
          alt="Stripe"
        />
      </div>
      <div className="my-4">
        <div className="text-center">or</div>
      </div>
      <form className="flex flex-col gap-4 w-80 me-10">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstName" value="First name" />
          </div>
          <TextInput id="firstName" type="name" placeholder="John" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="secondName" value="Second name" />
          </div>
          <TextInput id="secondName" type="name" placeholder="Doe" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cardNumber" value="Card number" />
          </div>
          <TextInput
            id="cardNumber"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="expiry" value="Expiry" />
          </div>
          <TextInput id="expiry" type="text" placeholder="mm-yy" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="csv" value="CSV" />
          </div>
          <TextInput id="csv" type="text" placeholder="xxx" required />
        </div>
        <div className="flex gap-2">
          <Checkbox id="accept" />
          <Label htmlFor="accept" className="flex">
            Save my card details for next time
          </Label>
        </div>
        <div className="flex gap-2">
          <Checkbox id="accept" />
          <Label htmlFor="accept" className="flex">
            Keep with updated about this event
          </Label>
        </div>
        <Button type="submit" gradientMonochrome="teal" onClick={submitForm}>
          Pay €{price}
        </Button>
      </form>
    </div>
  );
}
