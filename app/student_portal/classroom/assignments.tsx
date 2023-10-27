"use client";

import { AssessmentType, CourseAssessment } from "@/types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Fragment } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import Exam from "./exam";
import Task from "./task";

const courseAssessments: CourseAssessment[] = [
  {
    id: "course1",
    name: "Course 1",
    Assessment: [
      {
        id: "task1",
        type: AssessmentType.TASK,
        title: "Task 1",
        description: "This is the first task for Course 1.",
      },
      {
        id: "exam1",
        type: AssessmentType.EXAM,
        title: "Exam 1",
        description: "This is the first exam for Course 1.",
      },
    ],
  },
  {
    id: "course2",
    name: "Course 2",
    Assessment: [
      {
        id: "task2",
        type: AssessmentType.TASK,
        title: "Task 2",
        description: "This is the first task for Course 2.",
      },
      {
        id: "exam2",
        type: AssessmentType.EXAM,
        title: "Exam 2",
        description: "This is the first exam for Course 2.",
      },
    ],
  },
];

const Assignments = () => {
  return (
    <div>
      <Accordion variant="splitted">
        {courseAssessments.map(({ name, Assessment }, index) => (
          <AccordionItem
            indicator={({ isOpen }) => (
              <div>
                {isOpen ? (
                  <span>
                    <MdRemove
                      style={{ transform: "rotate(90deg)" }}
                      size={22}
                    />
                  </span>
                ) : (
                  <MdAdd size={22} />
                )}
              </div>
            )}
            key={index}
            aria-label="Accordion 1"
            title={name}
          >
            {Assessment.map((item, index) => (
              <Fragment key={index}>
                {item.type === AssessmentType.TASK ? (
                  <Task title={item.title} description={item.description} />
                ) : item.type === AssessmentType.EXAM ? (
                  <Exam title={item.title} description={item.description} />
                ) : null}
              </Fragment>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Assignments;
