/*
 * Rule: Properties should be known (listed in CSS3 specification) or
 * be a vendor-prefixed property.
 */

CSSLint.addRule({

    //rule information
    id: "known-properties",
    name: "Require use of known properties",
    desc: "Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.",
    browsers: "All",

    //initialization
    init: function(parser, reporter){
        var rule = this;

        parser.addListener("property", function(event){

            // the check is handled entirely by the parser-lib (https://github.com/nzakas/parser-lib)
            if (event.invalid) {
                reporter.report(event.invalid.message, event.line, event.col, rule);
            }

        });
    }

});
