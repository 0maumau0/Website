"use strict";
var Grid;
(function (Grid) {
    const containerGrid = document.getElementById("containerGrid");
    const imageCount = document.getElementById("containerGrid")?.childElementCount;
    const columsAndRows = Math.floor(Math.sqrt(imageCount));
    const rowsCount = Math.ceil(imageCount / columsAndRows);
    const rowsHeight = containerGrid.offsetHeight / rowsCount;
    let border = 10;
    const columsWidth = (containerGrid.offsetWidth / columsAndRows) - border;
    function setupGrid() {
        containerGrid.style.display = "grid";
        containerGrid.style.gridTemplateColumns = "repeat(" + columsAndRows + "," + columsWidth + "px)";
        containerGrid.style.gridTemplateRows = "auto";
        containerGrid.style.gap = "5px";
        containerGrid.style.alignItems = "center";
        containerGrid.style.justifyItems = "center";
        setImageHeightandWidth();
    }
    function setImageHeightandWidth() {
        for (let i = 1; i <= imageCount; i++) {
            let image = document.getElementById("image-" + i + "");
            image.style.maxHeight = "" + rowsHeight + "px";
            image.style.maxWidth = "" + columsWidth + "px";
        }
    }
    setupGrid();
})(Grid || (Grid = {}));
//# sourceMappingURL=Grid.js.map