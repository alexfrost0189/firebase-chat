import React, { FormEvent, useState } from 'react'
import { Button, Input, StyledForm } from './styled'

interface FormProps {
  handleSubmit: (arg: string) => void
  buttonText: string
}

const Form = ({ handleSubmit, buttonText }: FormProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.length) {
      handleSubmit(value)
      setValue('')
    }
  }

  return (
    <StyledForm as='form' onSubmit={handleOnSubmit}>
      <Input type='text' onChange={handleChange} value={value} />
      <Button type='submit'>{buttonText}</Button>
    </StyledForm>
  )
}

export default Form
