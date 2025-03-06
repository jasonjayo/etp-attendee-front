"use client";

import React, { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import BrowseCard from "./BrowseCard";
import { Select } from "flowbite-react";

export default function EventList() {
  const { events, loading, error } = useEvents();
  const [selectedLocation, setSelectedLocation] = useState("all");

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  const locations = [...new Set(events.map((event) => event.location))];

  const filteredEvents =
    selectedLocation === "all"
      ? events
      : events.filter((event) => event.location === selectedLocation);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3">
        <Select onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="all">All locations</option>
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </Select>
      </div>
      {filteredEvents.map((event) => (
        <BrowseCard event={event} key={event.id}></BrowseCard>
      ))}
    </div>
  );
}
