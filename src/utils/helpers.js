export const makeFirstCharUpperCase = (message)=>{
    const newM = message.split('-')
    const upperCasedWord = newM.map(item=>`${item.charAt(0).toUpperCase()}${item.slice(1)}`)
    const joinedMessage = upperCasedWord.join("")
    return joinedMessage
  }