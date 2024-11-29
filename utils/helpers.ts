export function formatDate(date: string) {
  // Format the date in a human-readable way with month name and day
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long', // Use full month name for better readability
    day: 'numeric',
    year: 'numeric', // Include year for complete context
    timeZone: 'UTC'
  });

  // Calculate relative time in a human-friendly format
  const getRelativeTime = (dateStr: string) => {
    const now = new Date().getTime();
    const then = new Date(dateStr).getTime();
    const diff = now - then;
    
    // Convert time differences to human units
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // Return the most appropriate human-readable format
    if (minutes < 1) return 'Just now';
    if (minutes === 1) return 'A minute ago';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours === 1) return 'An hour ago';
    if (hours < 24) return `${hours} hours ago`;
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (weeks === 1) return 'Last week';
    if (weeks < 4) return `${weeks} weeks ago`;
    if (months === 1) return 'Last month';
    if (months < 12) return `${months} months ago`;
    if (years === 1) return 'Last year';
    return `${years} years ago`;
  };

  // Only calculate relative time on client-side to avoid hydration issues
  if (typeof window === 'undefined') {
    return formattedDate;
  }

  // Combine absolute and relative dates with a bullet separator
  return `${formattedDate} • ${getRelativeTime(date)}`;
}
