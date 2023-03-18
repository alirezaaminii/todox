export function splitItems(str: string) {
  return str.split(',').map(item => item.trim());
}