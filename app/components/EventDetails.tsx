"use client";

import { useParams } from "next/navigation";
import { useEvent } from "../hooks/useEvent";

export default function EventDetails() {
  const { id } = useParams();
  const eventId = id ? Number(id) : null; // Convert id to a number
  const { event, loading, error } = useEvent(eventId);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>📍 {event.location}</p>
      <p>📅 {event.date.toLocaleDateString()}</p>
    </div>
  );
}
