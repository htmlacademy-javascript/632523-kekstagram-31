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

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      result += string[i];
    }
  }
  return result;
};

extractNumbers();
