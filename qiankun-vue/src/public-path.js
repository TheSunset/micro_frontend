if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  let childPath = "";
  if (process.env.BASE_URL !== "/") {
    childPath = process.env.BASE_URL.replace("/", "");
  }
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + childPath;
}
