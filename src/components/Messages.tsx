import React, { useEffect, useRef } from 'react'
import { ChatMessage } from '../interfaces'
import { StyledMessage, StyledMessagesWindow } from './styled'
import formatTime from '../helpers/formatTime'

interface MessagesProps {
  messages: ChatMessage[]
}

const Messages = ({ messages }: MessagesProps) => {
  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (windowRef) {
      windowRef.current?.scrollTo({
        left: 0,
        top: windowRef.current?.offsetHeight,
        behavior: 'smooth'
      })
    }
  }, [messages])

  return (
    <StyledMessagesWindow ref={windowRef}>
      {messages.map(({ timestamp, user, content, own }) => (
        <StyledMessage key={timestamp} own={own}>
          <div className='top'>
            <div className='name'>{user}</div>
            <div className='time'>{formatTime(timestamp)}</div>
          </div>
          <p>{content}</p>
        </StyledMessage>
      ))}
    </StyledMessagesWindow>
  )
}

export default Messages
