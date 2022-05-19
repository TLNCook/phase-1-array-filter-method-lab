
function findMatching(drivers, name) {
    return drivers.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase()
    );
  }
  
function fuzzyMatch(drivers, testName) {
    return drivers.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testName.toLowerCase()) === 0
    );
  }
  
function matchName(drivers, driverName) {
    return drivers.filter((driver) => driver.name === driverName);
  }