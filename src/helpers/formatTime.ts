const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)

  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

export default formatTime
