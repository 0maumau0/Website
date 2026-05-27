namespace Website{

    const canvas:HTMLCanvasElement = document.getElementById("canvasDraw") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    //coordinate system 
    let stepsWidth:number = 40;
    let stepsheight:number = 60;
    let CscaleY:number = 0;
    let CscaleX:number = 0;
    let docWidth:number = document.body.offsetWidth;
    let minuslengthPercent:number = 50 * (stepsheight/100);
    let amplitude:number = 15;

    function draw():void{

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.strokeStyle = "White";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(5*CscaleX,0);
    for (let i = 0; i <= stepsheight- minuslengthPercent ;i++){
        ctx.lineTo(5*CscaleX + amplitude* Math.sin(i/2), 1+i * CscaleY)
    };
    ctx.stroke();
    ctx.closePath();
    createProject();
    }

    function createProject():void{
        

    }

    function setupScene():void{
        canvas.height = document.getElementById("main-page-first")?.offsetHeight!* 0.5;
        canvas.width = docWidth;
        CscaleX = canvas.width / stepsWidth;
        CscaleY = canvas.height / stepsheight;
    }

    function update():void{
        draw()
        requestAnimationFrame(update);
    }

    setupScene()
    update();
}