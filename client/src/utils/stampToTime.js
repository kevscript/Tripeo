// takes in UNIX timestamp and a timeZone
// parses the timestamp into a Time string
const stampToTime = (stamp, timeZone) => {
  const date = new Date(stamp * 1000)
  const parsed = date.toLocaleTimeString('fr-FR', {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit'
  })

  return parsed
}

export default stampToTime