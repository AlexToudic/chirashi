export function isSafari() {
  let ua = navigator.userAgent.toLowerCase(),
      vendor = navigator.vendor.toLowerCase();

  return /safari/i.test(ua) && /apple computer/.test(vendor);
}