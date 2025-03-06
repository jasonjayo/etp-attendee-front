"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { useEvent } from "../hooks/useEvent";
import { Suspense } from "react";

function Purchase() {
  const searchParams = useSearchParams();
  const eventId = Number(searchParams.get("eventId"));
  const ticketType = searchParams.get("ticketType");

  const { event } = useEvent(eventId);
  const ticket = event.tickets.find((ticket) => ticket.name == ticketType);

  return (
    <div className="flex flex-1 justify-center gap-12">
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
        <Button type="submit" gradientMonochrome="teal">
          Pay €{ticket?.price}
        </Button>
      </form>
      <section className="flex flex-col justify-center bg-slate-100 rounded-xl p-20 ms-10">
        You&#39;re purchasing a
        <div className="font-bold text-2xl">{ticket?.name}</div>
        for
        <div className="font-bold text-2xl">{event.title}</div>
      </section>
    </div>
  );
}

export default function PurchasePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Purchase />
    </Suspense>
  );
}
