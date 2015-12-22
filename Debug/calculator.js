function Calulator() {
   this.add = function (i, j) {
      return i + j;
   }

   this.minus = function (i, j) {
      return i - j;
   }
}

module.exports = Calulator;