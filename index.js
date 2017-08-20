const n0 = require('negative-zero');
const nInfinity = require('negative-infinity');

function check (number) {
    return n0(number) || nInfinity.check(number) || (number > -Infinity && number < 0);
}

module.exports = {
    check
};
