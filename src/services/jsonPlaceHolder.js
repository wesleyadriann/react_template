import axios from 'axios'

import { endpoints } from '../settings'

const { jsonPlaceHolder } = endpoints

const api = axios.create({
  baseURL: jsonPlaceHolder.baseUrl
})

export const getTodos = (id = '') => {
  const { todos } = jsonPlaceHolder
  const path = todos.route(id)

  return api({
    method: todos.method,
    path
  })
}
