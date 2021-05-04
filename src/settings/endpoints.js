export const endpoints = {
  jsonPlaceHolder: {
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    todos: {
      route: (id = '') => `/todos/${id}`,
      method: 'get'
    }
  }
}
