"use strict";
var Website;
(function (Website) {
    const canvas = document.getElementById("canvasDraw");
    const ctx = canvas.getContext("2d");
    //coordinate system 
    let stepsWidth = 40;
    let stepsheight = 60;
    let CscaleY = 0;
    let CscaleX = 0;
    let docWidth = document.body.offsetWidth;
    let minuslengthPercent = 50 * (stepsheight / 100);
    let amplitude = 15;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "White";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(5 * CscaleX, 0);
        for (let i = 0; i <= stepsheight - minuslengthPercent; i++) {
            ctx.lineTo(5 * CscaleX + amplitude * Math.sin(i / 2), 1 + i * CscaleY);
        }
        ;
        ctx.stroke();
        ctx.closePath();
        createProject();
    }
    function createProject() {
    }
    function setupScene() {
        canvas.height = document.getElementById("main-page-first")?.offsetHeight * 0.5;
        canvas.width = docWidth;
        CscaleX = canvas.width / stepsWidth;
        CscaleY = canvas.height / stepsheight;
    }
    function update() {
        draw();
        requestAnimationFrame(update);
    }
    setupScene();
    update();
})(Website || (Website = {}));
//# sourceMappingURL=script.js.map