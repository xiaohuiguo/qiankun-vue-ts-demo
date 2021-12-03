const _window: any = window
if (_window.__POWERED_BY_QIANKUN__) {
  if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}${process.env.BASE_URL}`;
    } else {
      // eslint-disable-next-line
      __webpack_public_path__ = _window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
}