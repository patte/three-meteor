// Typed Array polyfill
window.Float32Array = function (array) {
    if (typeof array === 'number') {
        this.length = array;
    } else if ('length' in array) {
        this.length = array.length;
        for (var i = 0, len = array.length; i < len; i++) {
            this[i] = +array[i];
        }
    }
};

window.Float32Array.prototype = [];