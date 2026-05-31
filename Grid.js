"use strict";
var Grid;
(function (Grid) {
    const containerGrid = document.getElementById("containerGrid");
    const imageCount = document.getElementById("containerGrid")?.childElementCount;
    const columsAndRows = Math.floor(Math.sqrt(imageCount)) + 1;
    const rowsHeight = containerGrid.offsetHeight / columsAndRows;
    const columsWidth = containerGrid.offsetWidth / columsAndRows;
    function setupGrid() {
        let border = 10;
        containerGrid.style.display = "grid";
        containerGrid.style.gridTemplateColumns = "repeat(" + columsAndRows + "," + (columsWidth - border) + "px)";
        containerGrid.style.gridTemplateRows = "auto";
        containerGrid.style.gap = "5px";
        containerGrid.style.alignItems = "center";
        containerGrid.style.justifyItems = "center";
        setImageHeightandWidth();
    }
    function setImageHeightandWidth() {
        for (let i = 1; i <= imageCount; i++) {
            let image = document.getElementById("image-" + i + "");
            if (image === null)
                return;
            image.height = rowsHeight;
            image.width = columsWidth;
        }
    }
    setupGrid();
})(Grid || (Grid = {}));
//# sourceMappingURL=Grid.js.map