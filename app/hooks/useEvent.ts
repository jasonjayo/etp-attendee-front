import { useState, useEffect } from "react";
import { fetchEvent, Event } from "../services/eventService";

export function useEvent(eventId: number) {
  const [event, setEvent] = useState<Event>({
    id: 0,
    date: new Date(),
    title: "Unknown event",
    location: "Unknown",
    description: "No event found.",
    image: "",
    tickets: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchEvent(eventId)
      .then((data) => {
        setEvent({ ...data, date: new Date(data.date) });
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [eventId]);

  return { event, loading, error };
}
