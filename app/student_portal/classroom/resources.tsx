import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Divider,
} from "@nextui-org/react";
import { MdAdd, MdRemove, MdDownload } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";

const Resources = () => {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        indicator={({ isOpen }) => (
          <div>
            {isOpen ? (
              <span>
                <MdRemove className="rotate-90" size={22} />
              </span>
            ) : (
              <MdAdd size={22} />
            )}
          </div>
        )}
        key="1"
        aria-label="Accordion 1"
        title={
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
            Electronics
          </h1>
        }
      >
        <div className="rounded-md border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <div className="flex w-full justify-between p-2">
            <div className="flex items-center gap-x-2">
              <FaFilePdf size={30} />
              <div>
                <h1 className="font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  File Name
                </h1>
                <div className="flex gap-2">
                  <Chip size="sm" className="text-xs" color="default">
                    PDF
                  </Chip>
                  <Chip size="sm" className="text-xs" color="warning">
                    16 Mb
                  </Chip>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, tenetur.
                </p>
              </div>
            </div>
            <Button
              variant="light"
              radius="sm"
              endContent={<MdDownload size={14} />}
              size="sm"
            >
              Download
            </Button>
          </div>
          <Divider />
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Resources;
