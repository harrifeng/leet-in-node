var assert = require('assert');

describe('LeetCode', function() {
  it('001 two sum', function() {
    assert.deepEqual([0, 1], twoSum([2, 7, 1, 15], 9));
  });
});


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  let ret = [];

  nums.forEach((one, idx) => {
    if (map.has(target - one)) {
      ret.push(map.get(target - one));
      ret.push(idx);
    } else {
      map.set(one, idx);
    }
  });
  return ret;
};
