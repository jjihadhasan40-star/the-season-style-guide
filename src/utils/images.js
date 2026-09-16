// src/utils/images.js
// Shared image-fallback helper so a broken remote photo never shows a broken-image icon.

export const fallbackImg = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3ead9"/><stop offset="1" stop-color="#c9a24b"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>'
)}`;

export const onImgError = `this.onerror=null;this.src='${fallbackImg}'`;