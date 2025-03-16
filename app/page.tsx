// import Image from "next/image";

import { Button } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center bg-white text-gray-700 border-gray-200 dark:bg-gray-900">
      <p>MasterTicket Home. Use the navbar at the top to navigate.</p>
      <p className="mt-4">
        This module prototypes requirements pertaining to event attendees.
      </p>
      <Button
        className="mt-10"
        as={Link}
        href="browse"
        gradientDuoTone="greenToBlue"
      >
        Browse Events
      </Button>
    </div>
  );
}
