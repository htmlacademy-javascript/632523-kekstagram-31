const getStringLength = (string = '', maxLength = 1) => string.length <= maxLength;

getStringLength();

const isPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();

  let reversedSting = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedSting += string[i];
  }

  return string === reversedSting;
};

isPalindrome();

const extractNumbers = (string) => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.legth - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};

extractNumbers();
