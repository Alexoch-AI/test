import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePerson, editPerson } from '../../redux/actions/mainAction'
import './style.css'


function Person(props) {
  const [flag, setFlag] = useState(false)
  const [inputs, setInputs] = useState({
    name: props?.name,
    number: props?.number,
  })

  const dispatch = useDispatch()
  const phoneRegexp = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/gm
  const inputsHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  function submitHandlerRedaction(e) {
    e.preventDefault()
    if (inputs.name !== '' && String(inputs?.number).match(phoneRegexp)) {
      dispatch(editPerson({ name: inputs.name, number: inputs.number, id: props?.id }))
      setFlag(!flag)
    } else if (inputs.name === '') {
      alert('Введите имя!')
    } else if (!String(inputs?.number).match(phoneRegexp)) {
      alert('Введите номер в формате 8-XXX-XXX-XX-XX')
    } else {
      alert('Что-то пошло не так!')
    }
  }


  const deleteHandler = (id) => {
    dispatch(deletePerson(id))
  }

  return (
    <>
      <tr>
        <td>
          {props?.index + 1}.
        </td>
        {
          flag ?
            <>
              <td className='td-style'>
                <input className='input-style'
                  onChange={inputsHandler}
                  name='name'
                  type='text'
                  value={inputs.name}
                  required />
              </td>
              <td className='td-style'>
                <input className='input-style'
                  onChange={inputsHandler}
                  name='number'
                  type='tel'
                  value={inputs.number}
                  title='8-XXX-XXX-XX-XX'
                  required
                  pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}"
                />
              </td>
              <td className='td-style'>
                <button onClick={submitHandlerRedaction}>Изменить!</button>
              </td>
            </>
            :
            <>
              <td className='td-style hidden-text'
                title={props?.name}>
                {props?.name}
              </td>
              <td className='td-style-number hidden-text'
                title={props?.number}>
                {props?.number}
              </td>
              <td>
                <button onClick={() => setFlag(!flag)}
                  style={{ marginLeft: '10px' }}>
                  Изменить
                </button>
              </td>
              <td>
                <button onClick={() => deleteHandler(props?.id)}>
                  Удалить
                </button>
              </td>
            </>
        }

      </tr>
    </>
  )
}

export default Person
