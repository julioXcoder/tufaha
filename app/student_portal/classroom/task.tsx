"use client";

import { useState, ChangeEvent, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Divider,
  Textarea,
} from "@nextui-org/react";
import { BiSolidBook } from "react-icons/bi";
import { MdCheckCircle, MdOutlineAlarm } from "react-icons/md";

interface Props {
  title: string;
  description: string;
}

const Task = ({ title, description }: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleFileRemove = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

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
              Task
            </Chip>
            <Chip
              startContent={<MdCheckCircle size={18} />}
              variant="faded"
              color="success"
              className="text-xs"
              size="sm"
            >
              Submitted
            </Chip>
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
          <Divider className="my-2" />
          <Textarea
            label="Work Summary"
            labelPlacement="outside"
            placeholder="Summarize your work here. You might include your main objectives, methods used, and any important findings or conclusions."
            className="w-full"
          />
          <div>
            <input
              ref={fileInputRef}
              className="hidden"
              id="multiple_files"
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <Button onClick={handleButtonClick}>Select Files</Button>
            <div className="mt-2">
              {selectedFiles.map((file, index) => (
                <Chip
                  onClose={() => handleFileRemove(index)}
                  key={index}
                  size="sm"
                  color="primary"
                  className="mr-1 text-xs"
                >
                  {file.name}
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-end">
            <button>Submit</button>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Task;
