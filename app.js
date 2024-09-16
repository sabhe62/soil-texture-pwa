function classifySoilTexture() {
    // Get the clay and silt percentages from the input fields
    let clay = parseFloat(document.getElementById("clay").value);
    let silt = parseFloat(document.getElementById("silt").value);
    let sand = 100 - (clay + silt);

    // Validate the input
    if (isNaN(clay) || isNaN(silt) || clay < 0 || silt < 0 || (clay + silt) > 100) {
        document.getElementById("result").innerHTML = "Please enter valid percentages so that Clay + Silt <= 100.";
        return;
    }

    // Classification logic (same as your Python code)
    let soilTexture = "";

    if ((silt + 1.5 * clay) < 15) {
        soilTexture = "SAND";
    } else if ((silt + 1.5 * clay >= 15) && (silt + 2 * clay < 30)) {
        soilTexture = "LOAMY SAND";
    } else if ((clay >= 7 && clay < 20) && (sand > 52) && ((silt + 2 * clay) >= 30) || (clay < 7 && silt < 50 && (silt + 2 * clay) >= 30)) {
        soilTexture = "SANDY LOAM";
    } else if ((clay >= 7 && clay < 27) && (silt >= 28 && silt < 50) && (sand <= 52)) {
        soilTexture = "LOAM";
    } else if ((silt >= 50 && clay >= 12 && clay < 27) || (silt >= 50 && silt < 80 && clay < 12)) {
        soilTexture = "SILT LOAM";
    } else if (silt >= 80 && clay < 12) {
        soilTexture = "SILT";
    } else if ((clay >= 20 && clay < 35) && (silt >= 20) && sand > 45) {
        soilTexture = "SANDY CLAY LOAM";
    } else if ((clay >= 27 && clay < 40) && (sand > 20 && sand <= 45)) {
        soilTexture = "CLAY LOAM";
    } else if ((clay >= 27 && clay < 40) && (sand <= 20)) {
        soilTexture = "SILTY CLAY LOAM";
    } else if (clay >= 35 && sand > 45) {
        soilTexture = "SANDY CLAY";
    } else if (clay >= 40 && silt >= 40) {
        soilTexture = "SILTY CLAY";
    } else if (clay >= 40 && sand <= 45 && silt < 40) {
        soilTexture = "CLAY";
    } else {
        soilTexture = "Unclassified";
    }

    // Display the result
    document.getElementById("result").innerHTML = `Soil Texture: ${soilTexture}<br>Sand: ${sand.toFixed(2)}%`;
}
