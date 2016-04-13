'use strict';

module.exports = {
    register : register,
    unregister : unregister
};

function register(element, handler, interval) {
    element.clickAndHoldInterval = null;

    element.addEventListener('mousedown', _handleInitialPress(element, handler, interval), false);

    element.addEventListener('mouseup', _handlePressRelease(element), false);

    element.addEventListener('mouseleave', _handlePressRelease(element), false);

    element.addEventListener('touchstart', _handleInitialPress(element, handler, interval), false);

    element.addEventListener('touchend', _handlePressRelease(element), false);

    element.addEventListener('touchcancel', _handlePressRelease(element), false);
}

function unregister(element) {
    element.removeEventListener('mousedown', element.initialPressHanlder, false);

    element.removeEventListener('mouseup', element.pressReleaseHandler, false);

    element.removeEventListener('mouseleave', element.pressReleaseHandler, false);

    element.addEventListener('touchstart', element.initialPressHanlder, false);

    element.addEventListener('touchend', element.pressReleaseHandler, false);

    element.addEventListener('touchcancel', element.pressReleaseHandler, false);
}

// Partialy Curried.
function _handleInitialPress(element, handler, interval) {
    element.initialPressHanlder = function() {
        element.clickAndHoldInterval = setInterval(handler, interval);
    };

    return element.initialPressHanlder;
}

// Partialy Curried.
function _handlePressRelease(element) {
    element.pressReleaseHandler = function() {
        clearInterval(element.clickAndHoldInterval);
    };
    return element.pressReleaseHandler;
}


