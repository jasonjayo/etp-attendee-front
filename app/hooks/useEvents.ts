import { useState, useEffect } from "react";
import { fetchEvents, Event } from "../services/eventService";

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        const parsedEvents = data.map((event: Event) => ({
          ...event,
          date: new Date(event.date),
        }));
        setEvents(parsedEvents);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { events, loading, error };
}
