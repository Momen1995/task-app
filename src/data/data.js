export const initialTask = {
  id: crypto.randomUUID(),
  title: "Finish portfolio project",
  status: "progress",
  priority: "high",
  tags: ["work", "urgent"],
  date: "2025-04-15",
  isDone: false,
};


//date function
export function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB").format(date);
}
