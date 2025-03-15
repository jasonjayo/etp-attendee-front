"use client";
import { Event } from "../services/eventService";

import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import Link from "next/link";

interface BrowseCardProps {
  event: Event;
}

export default function BrowseCard({ event }: BrowseCardProps) {
  return (
    <Card
      className="max-w-sm"
      imgSrc={`${process.env.BASE_PATH}/images/${event.image}`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {event.title}
      </h5>
      <ul className="font-normal text-gray-700 dark:text-gray-400">
        <li>{event.date.toLocaleDateString()}</li>
        <li>{event.location}</li>
      </ul>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {event.description}
      </p>
      <Button
        as={Link}
        href={`/details/${event.id}`}
        gradientDuoTone="greenToBlue"
      >
        Get tickets
      </Button>
    </Card>
  );
}
