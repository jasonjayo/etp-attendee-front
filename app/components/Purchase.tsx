"use client";
import { useSearchParams } from "next/navigation";
import { useEvent } from "../hooks/useEvent";
import { Suspense } from "react";
import PurchaseForm from "./PurchaseForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

import { useDispatch } from "react-redux";
import { setPayment } from "../../store/purchaseSlice";
import type { AppDispatch } from "../../store/store";
import { imagesBasePath } from "../imagesBase";

function Purchase() {
  const dispatch: AppDispatch = useDispatch();

  const searchParams = useSearchParams();
  const eventId = Number(searchParams.get("eventId"));
  const ticketType = searchParams.get("ticketType");

  const { event } = useEvent(eventId);
  const ticket = event.tickets.find((ticket) => ticket.name == ticketType);

  const purchaseFlowState = useSelector(
    (state: RootState) => state.purchase.purchaseFlowState
  );

  const seats = 16;

  return (
    <div className="flex flex-1 justify-center gap-12">
      {purchaseFlowState === "seating" && (
        <div className="flex flex-col justify-center bg-slate-100 rounded-xl p-20 ms-10">
          <h1 className="font-bold text-2xl my-8">Select your seat</h1>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(seats)].map((e, i) => {
              const isUnavailable = i % 1.5 == 0;
              return (
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center 
                  ${
                    isUnavailable
                      ? "bg-red-500 cursor-not-allowed"
                      : "bg-green-500 cursor-pointer"
                  }`}
                  key={i}
                  title={isUnavailable ? "Seat unavailable" : "Seat unvailable"}
                  onClick={() => !isUnavailable && dispatch(setPayment())}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {purchaseFlowState === "form" && <PurchaseForm price={ticket?.price} />}
      {purchaseFlowState === "processing" && (
        <div className="flex justify-center flex-col items-center">
          <div className="loader mb-8"></div>
          <div>Processing payment...</div>
        </div>
      )}
      {purchaseFlowState === "completed" && (
        <div className="flex justify-center flex-col items-center">
          <div className="material-symbols-outlined !text-6xl mb-5">
            check_circle
          </div>
          <p className="my-4">Payment complete</p>
          <p className="my-4">
            You&#39;re going to <b>{event.title}</b>!
          </p>
          <p className="my-4">Your digital QR ticket is below.</p>
          <img
            src={`${imagesBasePath}images/qr.png`}
            className="w-48 mt-4"
            alt="QR code"
          />
          <div className="my-4 text-blue-500">
            <a href={`${imagesBasePath}ticket.pdf`} target="_blank">
              or download and print your ticket
            </a>
          </div>
        </div>
      )}

      {(purchaseFlowState === "form" || purchaseFlowState === "seating") && (
        <section className="flex flex-col justify-center bg-slate-100 rounded-xl p-20 ms-10">
          You&#39;re purchasing a
          <div className="font-bold text-2xl">{ticket?.name}</div>
          for
          <div className="font-bold text-2xl">{event.title}</div>
          <div className="mt-6">
            <b>€{ticket?.price}</b> incl. fees
          </div>
        </section>
      )}
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
