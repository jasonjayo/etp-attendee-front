import EventDetails from "../../components/EventDetails";

export async function generateStaticParams() {
  return [];
}

export default function Details() {
  return (
    <div>
      <EventDetails></EventDetails>
    </div>
  );
}
