
public class Solution {

    public int numberOfBeams(String[] bank) {
        int totalNumberOfLaserBeams = 0;
        int numberOfLaserDevicesOnPreviousRow = 0;

        for (String row : bank) {
            int numberOfLaserDevicesOnCurrentRow = countLaserDevicesOnRow(row.toCharArray());
            if (numberOfLaserDevicesOnCurrentRow > 0) {
                totalNumberOfLaserBeams += numberOfLaserDevicesOnPreviousRow * numberOfLaserDevicesOnCurrentRow;
                numberOfLaserDevicesOnPreviousRow = numberOfLaserDevicesOnCurrentRow;
            }
        }

        return totalNumberOfLaserBeams;
    }

    private int countLaserDevicesOnRow(char[] row) {
        int numberOfLaserDevicesOnRow = 0;
        for (char current : row) {
            numberOfLaserDevicesOnRow += current - '0';
        }
        return numberOfLaserDevicesOnRow;
    }
}
