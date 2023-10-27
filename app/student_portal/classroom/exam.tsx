"use client";

import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { BiSolidBook } from "react-icons/bi";
import { MdCheckCircle, MdOutlineAlarm } from "react-icons/md";

interface Props {
  title: string;
  description: string;
}

const Exam = ({ title, description }: Props) => {
  return (
    <Accordion
      showDivider={false}
      className="flex w-full flex-col gap-2 p-2"
      variant="splitted"
      itemClasses={{
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "rounded-lg h-16 flex items-center",
        indicator: "text-medium",
        content: "text-small",
      }}
    >
      <AccordionItem
        className="my-2"
        startContent={<BiSolidBook size={24} className="text-primary" />}
        subtitle={
          <div className="flex space-x-1">
            <Chip className="text-xs" size="sm">
              Exam
            </Chip>
            {/* <Chip
              startContent={<MdCheckCircle size={18} />}
              variant="faded"
              color="success"
              className="text-xs"
              size="sm"
            >
              Submitted
            </Chip> */}
            <Chip
              startContent={<MdOutlineAlarm size={16} />}
              variant="light"
              color="danger"
              className="text-xs"
              size="sm"
            >
              18 jul 2023
            </Chip>
          </div>
        }
        title={title}
      >
        <div>
          <p>{description}</p>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Exam;
