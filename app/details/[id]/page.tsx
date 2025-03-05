import EventDetails from "../../components/EventDetails";
import { fetchEvents } from "../../services/eventService";

export async function generateStaticParams() {
  const events = await fetchEvents();
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default function Details() {
  return (
    <div>
      <EventDetails></EventDetails>
    </div>
  );
}
