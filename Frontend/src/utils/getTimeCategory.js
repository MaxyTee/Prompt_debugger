export const getTimeCategory = (time) => {
  if (!time) return "Unknown Date";

  const date = new Date(time);
  const now = new Date();

  if (isNaN(date)) return "Invalid Date Format";

  const dateStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const nowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;

  const diffMs = nowStart - dateStart;

  const diffDays = Math.floor(diffMs / msPerDay);

  if (diffDays === 0) return "Today";
  if (diffDays > 0) {
    if (diffDays === 1) return "Yesterday";
    if (diffDays <= 7) return "Last 7 days";
    // To be accurate, 'Last 30 Days' includes all days from 2 to 30.
    if (diffDays <= 30) return "Last 30 Days";
    // This category now includes everything older than 30 days
    if (diffDays <= 60) return "Last 2 Months";
    return "Older";
  }
};
