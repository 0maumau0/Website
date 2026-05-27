namespace Website {


    export class Vector2 {
        x: number
        y: number

        constructor(posx: number = 0, posy: number = 0) {
            this.x = posx;
            this.y = posy;
        }

        set(v: Vector2) {
            this.x = v.x;
            this.y = v.y;
        }

        clone() {
            return new Vector2(this.x, this.y);
        }



    }
}