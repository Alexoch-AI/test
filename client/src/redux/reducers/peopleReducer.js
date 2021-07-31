import { ADD_PERSON, DELETE_PERSON, EDIT_PERSON } from '../types/types'

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PERSON:

      return {
        people: [...state.people, action.payload]
      }

    case DELETE_PERSON:
      return {
        people: state.people.filter(el => el.id !== action.payload.id)
      }

    case EDIT_PERSON:
      return {
        people: state.people.map(el => {
          if (el.id === action.payload.id) {
            return { ...el, name: action.payload.name, number: action.payload.number }
          }
          return el
        })
      }
    default:
      return state
  }
}

export default peopleReducer
