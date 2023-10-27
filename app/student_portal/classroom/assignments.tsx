"use client";

import { useState, ChangeEvent } from "react";

import {
  Accordion,
  AccordionItem,
  Chip,
  Divider,
  Textarea,
  divider,
} from "@nextui-org/react";
import { MdRemove, MdAdd, MdCheckCircle } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";

const Assignments = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleFileRemove = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion variant="splitted">
        <AccordionItem
          indicator={({ isOpen }) => (
            <div>
              {isOpen ? (
                <span>
                  <MdRemove style={{ transform: "rotate(90deg)" }} size={22} />
                </span>
              ) : (
                <MdAdd size={22} />
              )}
            </div>
          )}
          key="1"
          aria-label="Accordion 1"
          title="Electronics"
        >
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
                </div>
              }
              title="Connected devices"
            >
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt quod laborum hic. Reprehenderit vero ratione quam
                  odit. Nesciunt incidunt reiciendis voluptatum animi, minima
                  officia nihil quam modi cum minus ad quod excepturi? Fugiat
                  ratione dolorem a dolores temporibus, corporis, sunt quae id
                  eius eveniet, reprehenderit minus nulla ab doloremque
                  voluptate?
                </p>
                <Divider className="my-2" />
                <Textarea
                  label="Work Summary"
                  labelPlacement="outside"
                  placeholder="Summarize your work here. You might include your main objectives, methods used, and any important findings or conclusions."
                  className="w-full"
                />
                <div>
                  <label className="dark:text-gray-white mb-2 block text-sm font-medium text-gray-900">
                    Upload files
                  </label>
                  <input
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                    id="multiple_files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                  />
                  <div className="mt-2">
                    {selectedFiles.map((file, index) => (
                      <Chip
                        onClick={() => handleFileRemove(index)}
                        key={index}
                        color="primary"
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
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Assignments;
