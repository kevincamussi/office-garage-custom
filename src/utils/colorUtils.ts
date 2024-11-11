export const hexToRgb = (hex: string) => {
  if (hex.startsWith("#")) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }
  return "0, 0, 0";
};
