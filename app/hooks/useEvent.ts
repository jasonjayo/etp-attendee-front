import { useState, useEffect } from "react";
import { fetchEvent, Event } from "../services/eventService";

export function useEvent(eventId: number | null) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!eventId) return;

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
