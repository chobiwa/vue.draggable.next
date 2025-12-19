function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }
  return global ? global.console : console;
}
const console = getConsole();

export { console };
