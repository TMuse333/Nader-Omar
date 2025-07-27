export interface Task {
    name: string;
    steps: string[];
    faq?: {
      question: string;
      answer: string;
    }[];
  }

  export interface DashboardTask {
    name: string;
    description?: string;
    link?: string;
    completed: boolean;
    dueDate?: string; // optional: e.g., for tasks with deadlines
    tag?: string; // optional: e.g., "Setup", "Training", etc.
  }