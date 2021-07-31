import { ADD_PERSON, DELETE_PERSON, EDIT_PERSON } from "../types/types"

//если бы было подключение к серверу, то я бы использовал redux-thunk уже подключенный в store

//получение всех пользователей с сервера:

// export const allPeopleThunk = () => async (dispatch, getState) => {
//   const response = await fetch("https://url/people/allpeople")
//       const serverResponse = await response.json()
//       dispatch(getAllPeople(serverResponse))
// }

//отдаю всех в redux

// export const getAllPeople = (allPeople) => {
//   return {
//   type: ALL_PEOPLE, 
//   payload: allPeople,
// }
// }

//Добавление человека в бд, через сервер

// export const addPersonThunk = (person) => async (dispatch, getState) => {
//   const response = await fetch("https://url/people/addpeople", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(person),
//   })
//   const serverResponse = await response.json()
//   if(response.status === 200){
//     dispatch(addPerson(serverResponse))
//   }
// }

export const addPerson = ({ name, number, id }) => {
  return {
    type: ADD_PERSON,
    payload: { name, number, id }
  }
}

// Редактирование человека на сервере

// export const editPersonThunk = ({ name, number, id }) => async (dispatch, getState) => {
//   const response = await fetch("https://url/people/editperson", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, number, id }),
//   })
//   const serverResponse = await response.json()
//   if(response.status === 200){
//   dispatch(editPerson(serverResponse))
//   }
// }

export const editPerson = ({ name, number, id }) => {
  return {
    type: EDIT_PERSON,
    payload: { name, number, id },
  }
}

// удаление человека по уникальному id

// export const deletePersonThunk = (id) => async (dispatch, getState) => {
//   const response = await fetch(`https://url/people/delete/${id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }
//   })
//   if (response.status === 200) {
//     dispatch(deletePerson(id))
//   }
// }

export const deletePerson = (id) => {
  return {
    type: DELETE_PERSON,
    payload: { id },
  }
}

