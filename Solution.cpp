
#include <vector>
#include <string>
#include <string_view>
using namespace std;

class Solution {
    
public:
    int numberOfBeams(const vector<string>& bank) const {
        int totalNumberOfLaserBeams = 0;
        int numberOfLaserDevicesOnPreviousRow = 0;

        for (const auto& row : bank) {
            int numberOfLaserDevicesOnCurrentRow = countLaserDevicesOnRow(row);
            if (numberOfLaserDevicesOnCurrentRow > 0) {
                totalNumberOfLaserBeams += numberOfLaserDevicesOnPreviousRow * numberOfLaserDevicesOnCurrentRow;
                numberOfLaserDevicesOnPreviousRow = numberOfLaserDevicesOnCurrentRow;
            }
        }

        return totalNumberOfLaserBeams;
    }

private:
    int countLaserDevicesOnRow(string_view row) const {
        int numberOfLaserDevicesOnRow = 0;
        for (auto& current : row) {
            numberOfLaserDevicesOnRow += current - '0';
        }
        return numberOfLaserDevicesOnRow;
    }
};
