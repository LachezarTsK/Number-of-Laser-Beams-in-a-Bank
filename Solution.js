
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    this.ASCII_ZERO = 48;
    let totalNumberOfLaserBeams = 0;
    let numberOfLaserDevicesOnPreviousRow = 0;

    for (let row of bank) {
        let numberOfLaserDevicesOnCurrentRow = countLaserDevicesOnRow(row);
        if (numberOfLaserDevicesOnCurrentRow > 0) {
            totalNumberOfLaserBeams += numberOfLaserDevicesOnPreviousRow * numberOfLaserDevicesOnCurrentRow;
            numberOfLaserDevicesOnPreviousRow = numberOfLaserDevicesOnCurrentRow;
        }
    }

    return totalNumberOfLaserBeams;
};

/**
 * @param {string} row
 * @return {number}
 */
function countLaserDevicesOnRow(row) {
    let numberOfLaserDevicesOnRow = 0;
    for (let i = 0; i < row.length; ++i) {
        numberOfLaserDevicesOnRow += row.codePointAt(i) - this.ASCII_ZERO;
    }
    return numberOfLaserDevicesOnRow;
}
