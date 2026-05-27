"use strict";
var Website;
(function (Website) {
    class Rope {
        minuslengthPercent;
        amplitude;
        radius;
        xMovement;
        Cshort;
        constructor(minuslengthPercent, amplitude, rad, xmove, Cshort, stepsheight) {
            this.minuslengthPercent = minuslengthPercent * (stepsheight / 100);
            this.amplitude = amplitude;
            this.radius = rad;
            this.Cshort = Cshort;
            this.xMovement = xmove;
        }
    }
    Website.Rope = Rope;
})(Website || (Website = {}));
//# sourceMappingURL=ropes.js.map