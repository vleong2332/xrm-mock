"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiKeyPressableMock = (function () {
    function UiKeyPressableMock(keyPressHandlers) {
        this.keyPressHandlers = keyPressHandlers;
    }
    UiKeyPressableMock.prototype.addOnKeyPress = function (handler) {
        this.keyPressHandlers.push(handler);
    };
    UiKeyPressableMock.prototype.fireOnKeyPress = function (eventContext) {
        this.keyPressHandlers.forEach(function (k) {
            k(eventContext);
        });
    };
    UiKeyPressableMock.prototype.removeOnKeyPress = function (handler) {
        var index = this.keyPressHandlers.indexOf(handler);
        if (index > -1) {
            this.keyPressHandlers.splice(index);
        }
    };
    return UiKeyPressableMock;
}());
exports.UiKeyPressableMock = UiKeyPressableMock;
