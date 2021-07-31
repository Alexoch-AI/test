import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPerson } from '../../redux/actions/mainAction'
import '../../App.css'

function FormAdd() {
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    name: '',
    number: '',
  })
  const inputsHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const addHandler = (e) => {
    e.preventDefault()
    dispatch(addPerson({ name: inputs.name, number: inputs.number, id: Date.now() }))
    setInputs({ name: '', number: '' })
  }
  return (
    <div>
      <form onSubmit={addHandler}>
        <div>
          <input onChange={inputsHandler}
            value={inputs.name}
            name='name'
            type="text"
            placeholder="Введите имя!"
            required
          />
          <input onChange={inputsHandler}
            value={inputs.number}
            name='number'
            type="tel"
            placeholder="Введите номер!"
            title='8-XXX-XXX-XX-XX'
            required
            pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}"
          />
        </div>
        <button type="submit" className='button-center' >Добавить!</button>
      </form>
    </div>
  )
}

export default FormAdd

