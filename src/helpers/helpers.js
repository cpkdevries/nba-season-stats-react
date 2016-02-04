var helpers = {
  humanizeNumber : function(number) {
    var suffixes = {
      0: "th",
      1: "st",
      2: "nd",
      3: "rd",
      4: "th",
      5: "th",
      6: "th",
      7: "th",
      8: "th",
      9: "th"
    };
    return number + suffixes[(number).toString().slice(-1)];
  },
  humanizePercentage : function(percentage) {
    return (percentage * 100).toFixed(2);
  }
};

module.exports = helpers;
