export const endpoints = {
  jsonPlaceHolder: {
    baseUrl: process.env.REACT_APP_API ?? 'https://jsonplaceholder.typicode.com/',
    todos: {
      route: (id = '') => `/todos/${id}`,
      method: 'get'
    }
  }
}
