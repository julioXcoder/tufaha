"use client";

import {
  Card,
  CardBody,
  Image,
  Button,
  Progress,
  Listbox,
  ListboxSection,
  ListboxItem,
} from "@nextui-org/react";

interface item {
  label: string;
  description: string;
}

const items: item[] = [
  { label: "Department", description: "Computer Science & Engineering" },
  { label: "Programme", description: "Computer Science" },
  { label: "Academic year", description: "2023/2024" },
  { label: "Level", description: "Diploma" },
  { label: "Semester", description: "I" },
];

let status = true;

const StudentCard = () => {
  return (
    <Card
      className="bg-section-light dark:bg-section-dark max-w-6xl border-none"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-12 items-center justify-center gap-2 md:grid-cols-12 md:gap-4">
          <div className="relative col-span-6 md:col-span-4 lg:flex">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="/gon.png"
              width="100%"
            />
          </div>
          <div className="col-span-6 flex flex-col md:col-span-8">
            <div className="w-full max-w-[260px] rounded-small px-1 py-2">
              <Listbox variant="flat" aria-label="Listbox menu with sections">
                {items.map(({ label, description }, index) => (
                  <ListboxItem key={index} description={description}>
                    {label}
                  </ListboxItem>
                ))}
              </Listbox>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default StudentCard;
