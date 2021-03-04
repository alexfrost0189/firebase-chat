import React, { useState, useEffect } from 'react'
import { StyledChatWindow, StyledLoginPopup, StyledSendForm, Wrapper } from './styled'
import Form from './Form'
import Messages from './Messages'
import { db } from '../services/firebase'
import { ChatMessage } from '../interfaces'

const Chat = () => {
  const localLogin = localStorage.getItem('chat-login')
  const [login, setLogin] = useState(localLogin)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const handleLogin = (name: string) => {
    setLogin(name)
    localStorage.setItem('chat-login', name)
  }

  const handleSendMessage = (message: string) => {
    db.ref('chats').push({
      content: message,
      timestamp: Date.now(),
      user: login
    })
  }

  useEffect(() => {
    if (login) {
      db.ref('chats').on('value', snapshot => {
        let messages: ChatMessage[] = []
        snapshot.forEach(snap => {
          const value = snap.val()
          messages.push({
            ...value,
            own: value.user === login
          })
        });
        setMessages(messages)
      })
    }
  }, [login])

  return (
    <Wrapper>
      <StyledChatWindow>
        {!login && (
          <StyledLoginPopup>
            <div className='container'>
              <h2>Please, enter your name</h2>
              <Form handleSubmit={handleLogin} buttonText={'Login'} />
            </div>
          </StyledLoginPopup>
        )}
        <Messages messages={messages}/>
        <StyledSendForm>
          <Form handleSubmit={handleSendMessage} buttonText={'Send'} />
        </StyledSendForm>
      </StyledChatWindow>
    </Wrapper>
  )
}

export default Chat
