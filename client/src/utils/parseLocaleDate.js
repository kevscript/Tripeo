// util function for roadmap creation, parsing locale date string to DarkSky format
const parseLocaleDate = (date) => {
  const dateArray = date.split('/')
  const [ day, month, year ] = dateArray
  return `${year}-${month}-${day}T00:00:00`
}

export default parseLocaleDate