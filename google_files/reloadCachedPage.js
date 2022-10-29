/* TODO: Move this solution to an Angular way */

/**
 * Gets pageshow event and validated persisted value to know if is a cached document
 * This prevents client cache in mobile devices
 * @param {Object} the event object
 */
function reloadCachedPage(event) {
  if (event.persisted) {
    window.location.reload();
  }
}

window.addEventListener("pageshow", reloadCachedPage);
