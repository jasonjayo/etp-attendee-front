"use client";

import { Button } from "flowbite-react";

import { useParams } from "next/navigation";
import { useEvent } from "../hooks/useEvent";
import Link from "next/link";
// import styles from "./EventDetails.module.css";

export default function EventDetails() {
  const { id } = useParams();
  const eventId = Number(id);
  const { event, loading, error } = useEvent(eventId);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;
  if (!event) return <p>No event found.</p>;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  console.log(basePath);

  return (
    <div className="max-w-[1200px]">
      <img src={`${basePath}/images/${event.image}`} alt="Event" />
      <div>
        <h1 className="font-bold text-2xl my-4">{event.title}</h1>
        <p>{event.description}</p>
        <ul className="list-inside mt-4 ms-1">
          <li className="mt-4">📌 {event.location}</li>
          <li>📅 {event.date.toLocaleDateString()}</li>
        </ul>
        <h2 className="font-bold text-xl my-4">Tickets</h2>
        <ul>
          {event.tickets.map((ticket, index) => (
            <li
              className="p-4 my-4 bg-pink-300 text-pink-900 rounded flex items-center justify-between"
              key={index}
            >
              <span>{ticket.name}</span>
              <span>€{ticket.price}</span>
              <span>{ticket.quantity > 0 ? "Available" : "Sold out"}</span>
              {ticket.quantity > 0 ? (
                <Button
                  as={Link}
                  gradientMonochrome="pink"
                  href={`/purchase?eventId=${event.id}&ticketType=${ticket.name}`}
                  className="px-10"
                >
                  Purchase
                </Button>
              ) : (
                <Button gradientMonochrome="pink" className="px-10" disabled>
                  Purchase
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
