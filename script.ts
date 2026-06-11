namespace Website {
    
    class Rope {
        heightPercent: number;
        amplitude: number;
        radius: number;
        height: number;
        numBalls: number;
        standartSinus: number;
        sinusFactor: number;

        constructor(heightPercent: number, amplitude: number, rad: number, balls: number, standSinus: number = 20) {
            this.heightPercent = heightPercent;
            this.standartSinus = standSinus;
            this.amplitude = amplitude;
            this.radius = rad;
            this.numBalls = balls;
            this.height = ((stepsheight * (heightPercent / 100)) * CscaleY) / this.numBalls;
            this.sinusFactor = standSinus / this.numBalls;

        }

        draw(index: number) {
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
            for (let i = 0; i <= this.numBalls; i++) {

                ctx.beginPath();
                ctx.arc(((canvas.width / (Ropes.length + 1)) * (index + 1)) + (this.amplitude * Math.sin(i * this.sinusFactor)), i * this.height, this.radius - ((this.radius / this.numBalls) * i), 0, 360)
                ctx.stroke();
                ctx.closePath();
                ctx.fill()
            };
            let xCordinate: number = (canvas.width / (Ropes.length + 1)) * (index + 1);
            setupProjects(xCordinate, this.height * this.numBalls, index);
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
        Ropes.push(new Rope(25, 10, 20, 30, 15))
        Ropes.push(new Rope(60, 10, 10, 100, 20))
        Ropes.push(new Rope(20, 15, 15, 50, 10))
        // Ropes.push(new Rope(60, 20, 15, 40, 10))
    }

    function setupScene(): void {
        canvas.height = document.getElementById("main-page-first")?.offsetHeight! * 0.6;
        canvas.width = docWidth;
        CscaleX = canvas.width / stepsWidth;
        CscaleY = canvas.height / stepsheight;
        initializeRopes()
        Ropes.forEach((r, i) => {
            r.draw(i)
        });

    }
    //move Project buttons on right possition
    function setupProjects(xpos: number, ypos: number, index: number): void {
        let projectId: string = "Project" + (index + 1) + "";
        let project: HTMLButtonElement = document.getElementById(projectId) as HTMLButtonElement;
        let projparagraph: HTMLParagraphElement = project.lastChild as HTMLParagraphElement;


        if (project === null) return;
        project.style.width = "" + canvas.width * 0.20 + "px";
        project.style.height = "" + (canvas.height * 0.30) + "px";
        project.style.left = "" + (xpos - project.clientWidth / 2) + "px";
        project.style.top = "" + ypos + "px";

        projparagraph.style.paddingTop = project.style.height;
    }

    function update(): void {
        requestAnimationFrame(update);
    }

    setupScene()
    update();

    const buttonProject: HTMLButtonElement = document.getElementById("span") as HTMLButtonElement;
    const folderProject: HTMLDivElement = document.getElementById("folder-projects") as HTMLDivElement;
    console.log(buttonProject);


    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM fully loaded and parsed");

        const buttonProject: HTMLButtonElement = document.getElementById("button-projects") as HTMLButtonElement;
        const folderProject: HTMLDivElement = document.getElementById("folder-projects") as HTMLDivElement;
         const buttonArt: HTMLButtonElement = document.getElementById("button-art") as HTMLButtonElement;
        const folderArt: HTMLDivElement = document.getElementById("folder-art") as HTMLDivElement;

        //expand header buttons to multiple sections
        buttonProject.addEventListener("mouseover", (event: MouseEvent) => {
            folderProject.style.display = "block";
            folderProject.style.border = "2px";
            folderProject.style.borderRadius = "2px";
            folderProject.style.borderColor = "black"
            folderProject.style.backgroundColor = "white"
            
        });

        buttonArt.addEventListener("mouseover", (event: MouseEvent) => {
            folderArt.style.display = "block";
            folderArt.style.border = "2px";
            folderArt.style.borderRadius = "2px";
            folderArt.style.borderColor = "black"
            folderArt.style.backgroundColor = "white"
        });

        // fold header buttons down mian section
        buttonProject.addEventListener("mouseout", (event: MouseEvent) => {
            folderProject.style.display = "none";
        });


        buttonArt.addEventListener("mouseout", (event: MouseEvent) => {
            folderArt.style.display = "none";
        });
    });




}