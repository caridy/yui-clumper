"use strict";

var fs      = require("fs"),
    assert  = require("assert"),
    
    mock    = require("mock-fs"),

    Clumper = require("../lib");

describe("yui-clumper", function() {
    beforeEach(function() {
        mock();
    });

    afterEach(function() {
        mock.restore();
    });

    it("should output files", function(done) {
        var c = new Clumper({
            modules : [ "template" ],
            output  : "."
        });

        c.run(function() {
            console.log(fs.readRdirSync(".")); // TODO: Remove Debugging
        });
    });
});
