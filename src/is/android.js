export function isAndroid() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}