"use strict";
var Website;
(function (Website) {
    class Rope {
        heightPercent;
        amplitude;
        radius;
        xstart;
        height;
        numBalls;
        standartSinus;
        sinusFactor;
        constructor(heightPercent, amplitude, rad, xmove, balls, standSinus = 20) {
            this.heightPercent = heightPercent;
            this.standartSinus = standSinus;
            this.amplitude = amplitude;
            this.radius = rad;
            this.xstart = xmove;
            this.numBalls = balls;
            this.height = ((stepsheight * (heightPercent / 100)) * CscaleY) / this.numBalls;
            this.sinusFactor = standSinus / this.numBalls;
        }
        draw() {
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            for (let i = 0; i <= this.numBalls; i++) {
                console.log(this.sinusFactor);
                ctx.beginPath();
                ctx.arc(this.xstart * CscaleX + (10 * Math.sin(i * this.sinusFactor)), i * this.height, this.radius, 0, 360);
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
    let Ropes = [];
    function initializeRopes() {
        Ropes.push(new Rope(30, 10, 5, 5, 80, 20));
        Ropes.push(new Rope(80, 10, 10, 20, 80));
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