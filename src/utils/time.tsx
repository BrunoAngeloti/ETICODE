export function convertDate(date: string) {
  const data = new Date(date);
  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0');
  const year = data.getFullYear();

  return `${day}/${month}/${year}`;
}