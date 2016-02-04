var helpers = {
  humanizeNumber : function(number) {
    var suffixes = {
      0: "th",
      1: (number.toString().slice(-2) === "11" ? "th" : "st"), // stupid 11-13!
      2: (number.toString().slice(-2) === "12" ? "th" : "nd"),
      3: (number.toString().slice(-2) === "13" ? "th" : "rd"),
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
  },
  getImageSource : function(teamName) {
    return "../img/" + teamName.toLowerCase().replace(/ /g, '-') + '.png';
  }
};

module.exports = helpers;
