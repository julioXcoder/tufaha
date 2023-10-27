import { User } from "@nextui-org/react";
import React from "react";

interface item {
  name: string;
  course: string;
}

const lectures: item[] = [
  { name: "Dr. Alice Johnson", course: "Computer Science" },
  { name: "Prof. Bob Smith", course: "Physics" },
  { name: "Dr. Charlie Brown", course: "Mathematics" },
  { name: "Prof. David Williams", course: "Chemistry" },
  { name: "Dr. Emily Davis", course: "Biology" },
  { name: "Prof. Frank Miller", course: "Economics" },
  { name: "Dr. Grace Wilson", course: "History" },
  { name: "Prof. Henry Moore", course: "Geography" },
  { name: "Dr. Isabella Taylor", course: "English Literature" },
  { name: "Prof. Jack Anderson", course: "Philosophy" },
];

const StudentLectures = () => {
  return (
    <div className="h-full w-full px-6">
      <h1 className="my-1 -ml-2">Enrolled Courses</h1>
      <div className="flex h-[calc(100%-2.5rem)] flex-col space-y-2 overflow-y-auto">
        {lectures.map(({ name, course }, index) => (
          <User
            className="justify-start"
            key={index}
            name={name}
            description={course}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              size: "lg",
              radius: "md",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentLectures;
