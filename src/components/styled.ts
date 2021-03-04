import styled, { css } from 'styled-components'

interface StyledMessageProps {
  own: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`

export const StyledChatWindow = styled.div`
  width: 500px;
  height: 90%;
  max-width: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 10px 10px 60px 10px;
`

export const StyledSendForm = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
`

export const StyledForm = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0 10px;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  font-size: 18px;
  line-height: 20px;
  color: #fff;
  padding: 10px 15px;
  background-color: #4287f5;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #2676ed;
  }

  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  ${StyledForm} &,
  .form & {
    margin-left: 10px;
  }
`

export const StyledMessagesWindow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  overflow: auto;
`

export const StyledLoginPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .container {
    width: 80%;
  }

  .form {
    display: flex;
  }
`

export const StyledMessage = styled.div<StyledMessageProps>`
  background-color: #deebff;
  padding: 10px;
  border-radius: 5px;
  max-width: 80%;
  display: table;
  margin: 0 0 20px 0;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 0 10px;
  }

  .name {
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1 80%;
    font-weight: 700;
  }

  .time {
    font-size: 14px;
    opacity: 0.5;
    margin: 0 0 0 20px;
  }

  p {
    margin: 0;
  }

  ${props =>
    props.own &&
    css`
      margin-left: auto;
      background-color: #fff5db;
    `}
`
