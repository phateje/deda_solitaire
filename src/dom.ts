function isDomAvailable() {
  try {
    return document && 1;
  } catch (err) {
    return false;
  }
}

exports.Dom = class Dom {
  public static createElement(...args: any[]) {
    if (isDomAvailable()) {
      console.log("dom createElement with args", args);
      return document.createElement(args[0], args[1]);
    }
  }

  public static getElementsByTagName(tagName: string): HTMLCollectionOf<Element> {
    if (isDomAvailable()) {
      console.log("dom getElementsByTagName with args", tagName);
      return document.getElementsByTagName(tagName);
    }
  }

  public static getElementById(id: string): HTMLElement | null {
    if (isDomAvailable()) {
      console.log("dom getElementById with args", id);
      return document.getElementById(id);
    }
  }
};
