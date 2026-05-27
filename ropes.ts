namespace Website {

    export class Rope {
        minuslengthPercent:number;
        amplitude:number;
        radius: number;
        xMovement: number;
        Cshort: number;

        constructor(minuslengthPercent: number, amplitude: number, rad: number, xmove: number, Cshort: number, stepsheight:number) {
            this.minuslengthPercent = minuslengthPercent * (stepsheight / 100);
            this.amplitude = amplitude;
            this.radius = rad;
            this.Cshort = Cshort;
            this.xMovement = xmove;
        }
    }
}