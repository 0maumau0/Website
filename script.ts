namespace Website {


    class Rope {
        heightPercent: number;
        amplitude: number;
        radius: number;
        xstart: number;
        height: number;
        numBalls:number;
        standartSinus:number;
        sinusFactor:number;

        constructor(heightPercent: number, amplitude: number, rad: number, xmove: number, balls:number,standSinus:number = 20) {
            this.heightPercent = heightPercent;
            this.standartSinus = standSinus;
            this.amplitude = amplitude;
            this.radius = rad;
            this.xstart = xmove;
            this.numBalls = balls;
            this.height = ((stepsheight *  (heightPercent /100)) * CscaleY) / this.numBalls;
            this.sinusFactor = standSinus / this.numBalls;
            
        }

        draw() {
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            for (let i = 0; i <= this.numBalls; i++) {
                console.log(this.sinusFactor)

                ctx.beginPath();
                ctx.arc(this.xstart * CscaleX + (  10 * Math.sin(i * this.sinusFactor)), i* this.height, this.radius, 0, 360)
                ctx.stroke();
                ctx.closePath();
                ctx.fill()
            };
        }
    }

    const canvas: HTMLCanvasElement = document.getElementById("canvasDraw") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    //coordinate system 
    
    let stepsWidth: number = 40;
    let stepsheight: number = 80;
    let CscaleY: number = 0;
    let CscaleX: number = 0;
    let docWidth: number = document.body.offsetWidth;
    let Ropes: Rope[] = [];

    function initializeRopes(): void {
        Ropes.push(new Rope(30, 10, 5, 5,80,20))
        Ropes.push(new Rope(80, 10, 10, 20,80))
    }

    function setupScene(): void {
        canvas.height = document.getElementById("main-page-first")?.offsetHeight! * 0.5;
        canvas.width = docWidth;
        CscaleX = canvas.width / stepsWidth;
        CscaleY = canvas.height / stepsheight;
        initializeRopes()
        Ropes.forEach((r) => {
            r.draw()
        });
    }

    function update(): void {
        requestAnimationFrame(update);
    }

    setupScene()
    update();
}