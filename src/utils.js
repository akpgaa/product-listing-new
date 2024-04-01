export function shortenWithEllipsis(str, length) {
  return str.length > length ? str.substring(0, length) + "..." : str;
}
export const debounce = (func) => {
  let timer;
  const newLocal = this;
  return function (...args) {
    const context = newLocal;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
