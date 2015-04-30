exports.revert = function(str) {
    return str.replace(/(\w)\1+/g, '$1');
}