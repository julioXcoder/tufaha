"use client";

import { UploadFileResponse } from "@/types";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Divider,
  Textarea,
} from "@nextui-org/react";
import { useRef, useState } from "react";
import { FaBook } from "react-icons/fa";
import { MdCheckCircle, MdHourglassTop, MdOutlineAlarm } from "react-icons/md";

interface Props {
  title: string;
  description: string;
  submitted: boolean;
}

const Task = ({ title, description, submitted }: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setLoading] = useState(false);
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

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const uploadedImage: UploadFileResponse[] = await response.json();
      uploadedImage.forEach(({ data, error }) => {
        if (data) {
          console.log("url", data.url);
        } else if (error) {
          console.log("error", error.message);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const iconSize = 15;

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
        startContent={<FaBook size={30} className="text-primary" />}
        subtitle={
          <div className="flex space-x-1">
            <Chip className="text-xs" size="sm">
              Task
            </Chip>
            {submitted ? (
              <Chip
                startContent={<MdCheckCircle size={iconSize} />}
                variant="faded"
                color="success"
                className="text-xs"
                size="sm"
              >
                Submitted
              </Chip>
            ) : (
              <Chip
                startContent={<MdHourglassTop size={iconSize} />}
                variant="faded"
                color="warning"
                className="text-xs"
                size="sm"
              >
                Pending
              </Chip>
            )}

            <Chip
              startContent={<MdOutlineAlarm size={iconSize} />}
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
          <p className="text-gray-500">{description}</p>
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
          <div className="flex justify-end">
            <Button onClick={handleUpload} color="success">
              {isLoading ? "Submitting" : "Submit"}
            </Button>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Task;
