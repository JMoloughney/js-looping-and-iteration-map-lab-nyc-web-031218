// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(driver => driver.toLowerCase())
};

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(driver => {
    const fullNames = driver.split(" ")
    return {firstName: fullNames[0], lastName: fullNames[1]}
  })
return newDrivers
};

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name}`+' is from '+`${driver.hometown}`)
};


  // return newDrivers.map(driver => {firstName: driver[0], lastName: driver[1]})
