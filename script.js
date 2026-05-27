"use strict";
var Website;
(function (Website) {
    class Rope {
        minuslengthPercent;
        amplitude;
        radius;
        xMovement;
        Cshort;
        height;
        constructor(minuslengthPercent, amplitude, rad, xmove, Cshort, height) {
            this.minuslengthPercent = minuslengthPercent * (height / 100);
            this.amplitude = amplitude;
            this.radius = rad;
            this.Cshort = Cshort;
            this.xMovement = xmove;
            this.height = height;
        }
        draw() {
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            for (let i = 0; i <= this.height - this.minuslengthPercent; i++) {
                ctx.beginPath();
                ctx.arc(this.xMovement * CscaleX + this.amplitude * Math.sin(i / 2), 1 + i * CscaleY, this.radius - i / this.Cshort, 0, 360);
                ctx.stroke();
                ctx.closePath();
                ctx.fill();
            }
            ;
        }
    }
    const canvas = document.getElementById("canvasDraw");
    const ctx = canvas.getContext("2d");
    //coordinate system 
    let stepsWidth = 40;
    let stepsheight = 80;
    let CscaleY = 0;
    let CscaleX = 0;
    let docWidth = document.body.offsetWidth;
    // let minuslengthPercent: number = 30 * (stepsheight / 100);
    // let amplitude: number = 15;
    // let radius: number = 10;
    // let xMovement: number = 5;
    // let short: number = 10;
    let Ropes = [];
    // function draw(): void {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.strokeStyle = "white";
    // ctx.fillStyle = "white"
    // for (let i = 0; i <= stepsheight - minuslengthPercent; i++) {
    //     ctx.beginPath();
    //     ctx.arc(xMovement * CscaleX + amplitude * Math.sin(i / 2), 1 + i * CscaleY, radius - i / short, 0, 360)
    //     ctx.stroke();
    //     ctx.closePath();
    //     ctx.fill()
    // };
    // radius = 20
    // amplitude = 10
    // xMovement = 20
    // minuslengthPercent = 50 * (stepsheight / 100)
    // for (let i = 0; i <= stepsheight - minuslengthPercent; i++) {
    //     ctx.beginPath();
    //     ctx.arc(xMovement * CscaleX + amplitude * Math.cos(i / 2), 1 + i * CscaleY, radius - i / 2, 0, 360)
    //     ctx.stroke();
    //     ctx.closePath();
    //     ctx.fill()
    // };
    //}
    function initializeRopes() {
        Ropes.push(new Rope(30, 15, 10, 5, 10, 80));
        Ropes.push(new Rope(50, 10, 20, 20, 2, 80));
    }
    function setupScene() {
        canvas.height = document.getElementById("main-page-first")?.offsetHeight * 0.5;
        canvas.width = docWidth;
        CscaleX = canvas.width / stepsWidth;
        CscaleY = canvas.height / stepsheight;
        initializeRopes();
        Ropes.forEach((r) => {
            r.draw();
        });
    }
    function update() {
        requestAnimationFrame(update);
    }
    setupScene();
    update();
})(Website || (Website = {}));
//# sourceMappingURL=script.js.map