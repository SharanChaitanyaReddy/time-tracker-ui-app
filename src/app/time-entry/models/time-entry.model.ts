export interface TimeEntry {
  id: number;
  userId: number;
  projectId: number;
  taskDescription: string;
  startTime: string; // ISO string
  endTime: string;   // ISO string
  duration?: number; // optional, calculated
  createdAt: string;
  updatedAt: string;
}
