import axios from 'axios'

/*
  Free test REST API: https://reqres.in/
*/

const BASE_CONFIG = { baseUrl: 'https://reqres.in/api' }

export const getUsers = ({ page, delay } = {}) => {
  return axios.get('/users', { params: { page, delay }, ...BASE_CONFIG })
}

export const getUser = ({ id, delay } = {}) => {
  return axios.get(`/users/${id}`, { params: { delay }, ...BASE_CONFIG })
}

export const createUser = ({ name, job, delay } = {}) => {
  return axios.post('/users', {
    data: { name, job },
    params: { delay },
    ...BASE_CONFIG
  })
}

export const updateUser = ({ id, name, job, delay } = {}) => {
  return axios.put(`/users/${id}`, {
    data: { name, job },
    params: { delay },
    ...BASE_CONFIG
  })
}

export const deleteUser = ({ id, delay } = {}) => {
  return axios.delete(`/users/${id}`, { params: { delay }, ...BASE_CONFIG })
}
