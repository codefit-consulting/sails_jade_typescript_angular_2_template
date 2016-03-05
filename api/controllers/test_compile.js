System.register(['lodash'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _;
    var lodash_version;
    return {
        setters:[
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            lodash_version = _.VERSION;
            console.log('fuck you');
        }
    }
});
//# sourceMappingURL=test_compile.js.map