function handleInitialPress(element, handler, interval) {
  element.initialPressHandler = function initialPressHandler() {
    element.clickAndHoldInterval = setInterval(handler, interval);
  };

  return element.initialPressHandler;
}

function handlePressRelease(element) {
  element.pressReleaseHandler = function pressReleaseHandler() {
    clearInterval(element.clickAndHoldInterval);
  };
  return element.pressReleaseHandler;
}

function register(element, handler, interval) {
  element.clickAndHoldInterval = null;

  element.addEventListener('mousedown', handleInitialPress(element, handler, interval), false);

  element.addEventListener('mouseup', handlePressRelease(element), false);

  element.addEventListener('mouseleave', handlePressRelease(element), false);

  element.addEventListener('touchstart', handleInitialPress(element, handler, interval), false);

  element.addEventListener('touchend', handlePressRelease(element), false);

  element.addEventListener('touchcancel', handlePressRelease(element), false);
}

function unregister(element) {
  element.removeEventListener('mousedown', element.initialPressHandler, false);

  element.removeEventListener('mouseup', element.pressReleaseHandler, false);

  element.removeEventListener('mouseleave', element.pressReleaseHandler, false);

  element.addEventListener('touchstart', element.initialPressHandler, false);

  element.addEventListener('touchend', element.pressReleaseHandler, false);

  element.addEventListener('touchcancel', element.pressReleaseHandler, false);

  clearInterval(element.clickAndHoldInterval);
}

export default {
  register,
  unregister,
};
