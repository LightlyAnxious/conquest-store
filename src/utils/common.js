import {Screen} from 'const';
/* eslint-disable */
const debounce = (callback, wait) => {
  let timeout = null;
  return (...args) => {
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};

const detectScreen = width => {
  let currentScreen = '';

  // const screens = [
  //   ['desktop', width > Screen.TABLET],
  //   ['tablet', width > Screen.MOBILE && width <= Screen.TABLET],
  //   ['mobile', width <= Screen.MOBILE],
  // ];

  // screens.forEach(entry => {
  //   const [key, value] = entry;

  //   value ? (currentScreen = key) : '';
  // });

  if (width > Screen.TABLET) {
    currentScreen = 'desktop';
  }

  if (width > Screen.MOBILE && width <= Screen.TABLET) {
    currentScreen = 'tablet';
  }

  if (width <= Screen.MOBILE) {
    currentScreen = 'mobile';
  }

  return currentScreen;
};

export {debounce, detectScreen};
