export const sliceText = (text, length = 200) => {
  const textLength = text.length;
  const words = text.split(/\s+/);
  const truncatedText = words.slice(
    0,
    length < textLength ? textLength : length
  );
  return `${truncatedText} ...`;
};
