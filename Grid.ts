namespace Grid {

    const containerGrid: HTMLDivElement = document.getElementById("containerGrid") as HTMLDivElement;
    const imageCount: number = document.getElementById("containerGrid")?.childElementCount!;
    const columsAndRows: number = Math.floor(Math.sqrt(imageCount));
    const rowsCount: number = Math.ceil(imageCount / columsAndRows)
    const rowsHeight = containerGrid.offsetHeight / rowsCount;
    let border: number = 10
    const columsWidth = (containerGrid.offsetWidth / columsAndRows) - border;


    function setupGrid(): void {
        containerGrid.style.display = "grid";
        containerGrid.style.gridTemplateColumns = "repeat(" + columsAndRows + "," + columsWidth + "px)"
        containerGrid.style.gridTemplateRows = "auto"
        containerGrid.style.gap = "5px"
        containerGrid.style.alignItems = "center"
        containerGrid.style.justifyItems = "center"
        setImageHeightandWidth()
    }

    function setImageHeightandWidth(): void {

        for (let i = 1; i <= imageCount; i++) {
            let image: HTMLImageElement = document.getElementById("image-" + i + "") as HTMLImageElement;
            image.style.maxHeight = "" + rowsHeight + "px";
            image.style.maxWidth = "" + columsWidth + "px";

        }

    }

    setupGrid();
}