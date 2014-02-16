// Typed Array polyfill
Float32Array = function (array) {
    if (typeof array === 'number') {
        this.length = array;
    } else if ('length' in array) {
        this.length = array.length;
        for (var i = 0, len = array.length; i < len; i++) {
            this[i] = +array[i];
        }
    }
};

Float32Array.prototype = [];