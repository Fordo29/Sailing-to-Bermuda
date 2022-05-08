const calcTotalTime = (endTimeString) => {
  const endTimeArr = endTimeString.split(/, (?=\d{2})/)
  let n = endTimeArr.length
  let daySum = 0
  let hourMinSum = 0
  endTimeArr.forEach(endtime => {
    const updateEndTime = endtime.split(', ')
    
    // day
    let dayConversion = updateEndTime[1].split(' ')
    let dayToNumber = parseInt(dayConversion[1])
 
    // minute
    let minuteConversion = updateEndTime[0].split(' ')
    let hoursMin = minuteConversion[0].split(':')
    let hours = parseInt(hoursMin[0])
    let min = parseInt(hoursMin[1])

    if (dayToNumber > 1) {
      if (minuteConversion[1] === 'AM') {
          let dayToMinute = ((dayToNumber - 2) * 1440) + 960
          daySum += dayToMinute
        
      } else {
        let dayToMinute = ((dayToNumber - 1) * 1440)
        daySum += dayToMinute
      }      
    }

    if (minuteConversion[1] === 'PM') {
      if(hours !== 12) {
        let hoursToMin = ((hours + 4) * 60) + min
        hourMinSum += hoursToMin 
      } else {
        let hoursToMin = (4 * 60) + min
        hourMinSum += hoursToMin   
      }

    } else if (minuteConversion[1] === 'AM') {
      if(hours !== 12) {
        let hoursToMin = (hours * 60) + min
        hourMinSum += hoursToMin        
      } else {
        let hoursToMin = min
        hourMinSum += hoursToMin 
      }
  
    }
  })
  let totalSum = daySum + hourMinSum
  return Math.round(totalSum/n)
}

export default calcTotalTime;