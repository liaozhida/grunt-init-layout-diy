'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.umi_layout = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {

    var actual = [grunt.file.exists('tmp/a/page/index.ejs'), grunt.file.exists('tmp/a/tpl/b'), grunt.file.exists('tmp/a/static/image')];

    test.equal(actual[0], true, 'should exists');
    test.equal(actual[1], true, 'should exists');
    test.equal(actual[2], true, 'should exists');

    test.done();
  }
};