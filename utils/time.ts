import minutesToHours from 'date-fns/minutesToHours'

export const getTime = (minutes: number) => {
  if (minutes === 1) {
    return `${minutes} minute`
  }

  if (minutes < 60) {
    return `${minutes} minutes`
  }

  if (minutes === 60) {
    return `1 hour`
  }

  return `${minutesToHours(minutes)} hours`
}