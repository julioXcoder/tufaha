import { IconType } from "react-icons";

enum AssessmentType {
  TASK = "task",
  EXAM = "exam",
  // Add more types here as needed
}

interface CourseAssessment {
  id: string;
  name: string;
  Assessment: Assessment[];
}

type Assessment = Task | Exam;

interface BaseAssessment {
  id: string;
  type: AssessmentType;
  // Add any other common properties here
}

interface Task extends BaseAssessment {
  type: AssessmentType.TASK;
  title: string;
  description: string;
  submitted: boolean;
  // Add any other task-specific properties here
}

interface Exam extends BaseAssessment {
  type: AssessmentType.EXAM;
  title: string;
  description: string;
  // Add any other exam-specific properties here
}

interface Path {
  title: string;
  path: string;
  Icon?: IconType;
}

interface Tab {
  title: string;
  Component: React.ComponentType;
  Icon?: IconType;
}

type UploadFileResponse =
  | { data: UploadData; error: null }
  | { data: null; error: UploadError };

type UploadData = {
  key: string;
  url: string;
  name: string;
  size: number;
};

type UploadError = {
  code: string;
  message: string;
  data: any;
};

export { AssessmentType };
export type {
  CourseAssessment,
  Path,
  Tab,
  UploadData,
  UploadError,
  UploadFileResponse,
};
