import { Application } from '../types/theme';
import { Monitor, Terminal, Code, Slack, Chrome, Firefox } from 'lucide-react';

export const applications: Application[] = [
  {
    name: "VS Code",
    icon: "Code",
    fileFormat: ".json"
  },
  {
    name: "Terminal",
    icon: "Terminal",
    fileFormat: ".terminal"
  },
  {
    name: "Slack",
    icon: "Slack",
    fileFormat: ".css"
  }
];