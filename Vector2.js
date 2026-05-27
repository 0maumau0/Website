"use strict";
var Website;
(function (Website) {
    class Vector2 {
        x;
        y;
        constructor(posx = 0, posy = 0) {
            this.x = posx;
            this.y = posy;
        }
        set(v) {
            this.x = v.x;
            this.y = v.y;
        }
        clone() {
            return new Vector2(this.x, this.y);
        }
    }
    Website.Vector2 = Vector2;
})(Website || (Website = {}));
//# sourceMappingURL=Vector2.js.map