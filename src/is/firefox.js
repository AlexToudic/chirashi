export function isFirefox() {
  return /firefox/i.test(navigator.userAgent.toLowerCase());
}

export default isFirefox;
