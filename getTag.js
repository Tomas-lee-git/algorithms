const getTag = (val) => {
    if (val === undefined) {
        return '[object Undefined]';
    }
    if (val === null) {
        return '[object Null]';
    }
    return Object.prototype.toString.call(val);
};