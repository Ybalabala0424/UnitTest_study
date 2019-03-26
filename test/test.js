const assert = require('assert');
const array=require('./array');
describe('Array', function() {
    it('should return 2 when search array[1]', function() {
        assert.equal(2, array(1,2,3,4)[1])
    })
})
