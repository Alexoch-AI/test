import React from 'react'
import { useSelector } from 'react-redux'
import FormAdd from '../FormAdd/FormAdd'
import Person from '../Person/Person'
import './style.css'

function Main() {
  const people = useSelector(state => state.people)

  return (
    <div className='details'>
      <table className='css-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Номер</th>
          </tr>
        </thead>
        <tbody>
          {
            people?.map((el, index) => {
              return <Person
                key={el.id}
                name={el.name}
                id={el.id}
                index={index}
                number={el.number}
              />
            })
          }
        </tbody>
      </table>
      <FormAdd />
    </div>
  )
}

export default Main
