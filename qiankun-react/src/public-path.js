if (window.__POWERED_BY_QIANKUN__) {
  let childPath = "";
  if (process.env.PUBLIC_URL) {
    childPath = process.env.PUBLIC_URL.replace("/", "") + "/";
  }
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + childPath;
}
