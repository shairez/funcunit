/* new assertions */

QUnit.specify.extendAssertions({
    isGreaterThan: function(actual, expected, message) {
        ok(actual > expected, message);
    },
    isLessThan: function(actual, expected, message) {
        ok(actual < expected, message);
    },
    isNotEmpty: function(actual, message) {
        ok(actual.length > 0, message);
    },
    sizeOf: function(actual, expected, message) {
        ok(actual.length == expected, message);
    }
});