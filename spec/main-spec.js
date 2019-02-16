"use strict";

var _ = require("loadsh");
var chai = require("chai");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const main = require('../main/main.js');

describe('taxi fee', function () {
    // write your tests here...
    it("return 6, if distance is less than 2 kilometers and wait time is less than 2 minutes.", function() {
        var distance = 1;
        var time = 1;
        var result = main(distance, time);
        expect(result).to.equal(6);
    });

    it("return 7, if distance is 3 kilometers, and wait time is is less than 2.8 minutes.", function(){
        var distance = 3;
        var time = 2.79;
        var result = main(distance, time);
        expect(result).to.equal(7);
    });

    it("return 13, if distance is 10 kilometers, and wait time is is less than 1.2 minutes.", function(){
        var distance = 10;
        var time = 1;
        var result = main(distance, time);
        expect(result).to.equal(13);
    });
});
