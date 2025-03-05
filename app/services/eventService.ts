export interface Event {
  id: number;
  title: string;
  location: string;
  date: Date;
  description: string;
  image: string;
  tickets: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
}

const events: Event[] = [
  {
    id: 1,
    title: "All Together Now",
    location: "Curraghmore Estate, County Waterford",
    date: new Date("2025-07-31T00:00:00"),
    description:
      "Now entering our sixth chapter, All Together Now is Ireland’s largest independent festival and winner of the IMRO 2024 Festival of the Year award. We welcome music lovers, mavericks, creators, families and curious minds alike for a weekend of exploration, escapism, and togetherness.",
    image: "pexels-wendywei-1190298.jpg",
    tickets: [
      {
        name: "Weekend Ticket",
        price: 300.0,
        quantity: 1000,
      },
      {
        name: "Saturday Ticket",
        price: 150.0,
        quantity: 500,
      },
    ],
  },
  {
    id: 2,
    title: "Charli xcx",
    location: "Malahide Castle",
    date: new Date("2025-06-17T00:00:00"),
    description:
      "Avant-pop and electronic superstar Charli XCX has become an iconic figure in the arts, having helped expand the landscape of popular music over the last decade by seamlessly traversing the underground and mainstream with her artistic output.",
    image: "pexels-mikky-k-158844-625644.jpg",
    tickets: [
      {
        name: "Standard Ticket",
        price: 100.0,
        quantity: 3000,
      },
      {
        name: "VIP Ticket",
        price: 300.0,
        quantity: 300,
      },
    ],
  },
  {
    id: 3,
    title: "D-Block Europe",
    location: "Live At The Marquee",
    date: new Date("2025-07-22T00:00:00"),
    description:
      "D-Block Europe will bring their electrifying energy to Live at the Marquee, Cork",
    image: "pexels-picjumbo-com-55570-196652.jpg",
    tickets: [
      {
        name: "Standard Ticket",
        price: 50.0,
        quantity: 0,
      },
    ],
  },
];

export async function fetchEvents(): Promise<Event[]> {
  /** will connect to backend in future */
  // const response = await fetch("http://localhost:8000/events");
  // if (!response.ok) {
  //   throw new Error("Failed to fetch events");
  // }
  // return response.json();
  return events;
}

export async function fetchEvent(id: number): Promise<Event | undefined> {
  /** will connect to backend in future */
  // const response = await fetch(`http://localhost:8000/event/${id}`);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch event");
  // }
  // return response.json();
  return events.find((event) => event.id == id);
}
