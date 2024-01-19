
using System;

public class Solution
{
    public int NumberOfBeams(string[] bank)
    {
        int totalNumberOfLaserBeams = 0;
        int numberOfLaserDevicesOnPreviousRow = 0;

        foreach (string row in bank)
        {
            int numberOfLaserDevicesOnCurrentRow = CountLaserDevicesOnRow(row);
            if (numberOfLaserDevicesOnCurrentRow > 0)
            {
                totalNumberOfLaserBeams += numberOfLaserDevicesOnPreviousRow * numberOfLaserDevicesOnCurrentRow;
                numberOfLaserDevicesOnPreviousRow = numberOfLaserDevicesOnCurrentRow;
            }
        }

        return totalNumberOfLaserBeams;
    }

    private int CountLaserDevicesOnRow(string row)
    {
        int numberOfLaserDevicesOnRow = 0;
        foreach (char current in row)
        {
            numberOfLaserDevicesOnRow += current - '0';
        }
        return numberOfLaserDevicesOnRow;
    }
}
