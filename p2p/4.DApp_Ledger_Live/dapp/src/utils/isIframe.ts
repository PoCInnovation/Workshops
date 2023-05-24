const isIframe = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.self !== window.top;
};

export default isIframe;
