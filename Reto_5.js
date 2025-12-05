// Solución 1
function timeUntilTakeOff(fromTime, takeOffTime) {
  const result = fromTime.slice(0, -3).split("@")
  const date1 = result[0].split("*")
  const date2 = result[1].split("|")
  
  const fecha1 = new Date(Date.UTC(date1[0], date1[1] - 1, date1[2], date2[0], date2[1], date2[2]));
  
  const result2 = takeOffTime.slice(0, -3).split("@")
  const date3 = result2[0].split("*")
  const date4 = result2[1].split("|")
  
  const fecha2 = new Date(Date.UTC(date3[0], date3[1] - 1, date3[2], date4[0], date4[1], date4[2]));
  
  return  Math.floor(fecha2.getTime() - fecha1.getTime()) / 1000
}

// Solución 2
function timeUntilTakeOff(fromTime, takeOffTime) {
  function converter(elftime){
    elftime = elftime.slice(0, -3)

    let [y, m, extra] = elftime.split("*")
    let [d, extratime] = extra.split("@")
    let [hh, mm, ss] = extratime.split("|")

    return new Date(
      Date.UTC(
        Number(y),
        Number(m) - 1,
        Number(d),
        Number(hh),
        Number(mm),
        Number(ss),
      )
    )
  }
  return (Math.floor((converter(takeOffTime) - converter(fromTime)) / 1000))
}