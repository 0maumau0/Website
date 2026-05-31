namespace Grid {

    const containerGrid: HTMLDivElement = document.getElementById("containerGrid") as HTMLDivElement;
    const imageCount: number = document.getElementById("containerGrid")?.childElementCount!;
    const columsAndRows: number = Math.floor(Math.sqrt(imageCount)) + 1;
    const rowsHeight = containerGrid.offsetHeight / columsAndRows;
    const columsWidth = containerGrid.offsetWidth / columsAndRows;


    function setupGrid(): void {
        let border: number = 10
        containerGrid.style.display = "grid";
        containerGrid.style.gridTemplateColumns = "repeat(" + columsAndRows + "," + (columsWidth - border) + "px)"
        containerGrid.style.gridTemplateRows = "auto"
        containerGrid.style.gap = "5px"
        containerGrid.style.alignItems = "center"
        containerGrid.style.justifyItems = "center"
        setImageHeightandWidth()
    }

    function setImageHeightandWidth() {

        for (let i = 1; i <= imageCount; i++) {
            let image: HTMLImageElement = document.getElementById("image-" + i + "") as HTMLImageElement;
            if (image === null) return;
            image.height = rowsHeight;
            image.width = columsWidth;

        }

    }


    setupGrid();

}