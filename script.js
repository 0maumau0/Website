"use strict";
var Website;
(function (Website) {
    class Rope {
        heightPercent;
        amplitude;
        radius;
        height;
        numBalls;
        standartSinus;
        sinusFactor;
        constructor(heightPercent, amplitude, rad, balls, standSinus = 20) {
            this.heightPercent = heightPercent;
            this.standartSinus = standSinus;
            this.amplitude = amplitude;
            this.radius = rad;
            this.numBalls = balls;
            this.height = ((stepsheight * (heightPercent / 100)) * CscaleY) / this.numBalls;
            this.sinusFactor = standSinus / this.numBalls;
        }
        draw(index) {
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            for (let i = 0; i <= this.numBalls; i++) {
                ctx.beginPath();
                ctx.arc(((canvas.width / (Ropes.length + 1)) * (index + 1)) + (this.amplitude * Math.sin(i * this.sinusFactor)), i * this.height, this.radius - ((this.radius / this.numBalls) * i), 0, 360);
                ctx.stroke();
                ctx.closePath();
                ctx.fill();
            }
            ;
            let xCordinate = (canvas.width / (Ropes.length + 1)) * (index + 1);
            setupProjects(xCordinate, this.height * this.numBalls, index);
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
        Ropes.push(new Rope(25, 10, 20, 30, 15));
        Ropes.push(new Rope(60, 10, 10, 100, 20));
        Ropes.push(new Rope(20, 15, 15, 50, 10));
        // Ropes.push(new Rope(60, 20, 15, 40, 10))
    }
    function setupScene() {
        canvas.height = document.getElementById("main-page-first")?.offsetHeight * 0.6;
        canvas.width = docWidth;
        CscaleX = canvas.width / stepsWidth;
        CscaleY = canvas.height / stepsheight;
        initializeRopes();
        Ropes.forEach((r, i) => {
            r.draw(i);
        });
    }
    //move Project buttons on right possition
    function setupProjects(xpos, ypos, index) {
        let projectId = "Project" + (index + 1) + "";
        let project = document.getElementById(projectId);
        let projparagraph = project.lastChild;
        if (project === null)
            return;
        project.style.width = "" + canvas.width * 0.20 + "px";
        project.style.height = "" + (canvas.height * 0.30) + "px";
        project.style.left = "" + (xpos - project.clientWidth / 2) + "px";
        project.style.top = "" + ypos + "px";
        projparagraph.style.paddingTop = project.style.height;
    }
    function update() {
        requestAnimationFrame(update);
    }
    setupScene();
    update();
})(Website || (Website = {}));
//# sourceMappingURL=script.js.map