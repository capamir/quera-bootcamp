"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var randomNumber = Math.floor(Math.random() * 10) + 1;
            resolve(randomNumber);
        }, 500);
    });
}
exports.fetchData = fetchData;
//this function returns a random number between 1 and 10 after half a seconde.
