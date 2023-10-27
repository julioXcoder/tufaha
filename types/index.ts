import { IconType } from "react-icons";

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

export type { Path, Tab };
