export const removeLettersOfString = (string, letters) => {
  // split string with special letters

  const newArrayOfString = string.split(letters);
  console.log(newArrayOfString);
  let newString = '';
  if (newArrayOfString.length <= 0) return;

  newArrayOfString
    .filter((x) => x !== '')
    .forEach((words) => {
      console.log(words);
      newString = newString + words;
    });
  return newString;
};
