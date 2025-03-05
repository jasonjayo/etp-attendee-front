"use client";

import React from "react";
import { useEvents } from "../hooks/useEvents";
import BrowseCard from "./BrowseCard";

export default function EventList() {
  const { events, loading, error } = useEvents();

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {events.map((event) => (
        <BrowseCard event={event} key={event.id}></BrowseCard>
      ))}
    </div>
  );
}
