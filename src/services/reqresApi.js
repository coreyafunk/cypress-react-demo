import axios from 'axios'

/*
  Free test REST API: https://reqres.in/
*/

const BASE_CONFIG = { baseURL: 'https://reqres.in/api' }

export const getUsers = async ({ selectedPage, delay } = {}) => {
  const {
    data: {
      data: users,
      page,
      per_page: perPage,
      total,
      total_pages: totalPages
    } = {}
  } = await axios.get('/users', {
    params: { page: selectedPage, delay },
    ...BASE_CONFIG
  })

  return {
    users: users.map(user => ({
      id: user.id,
      avatar: user.avatar,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name
    })),
    page,
    perPage,
    total,
    totalPages
  }
}

export const getUser = async ({ id, delay } = {}) => {
  return axios.get(`/users/${id}`, { params: { delay }, ...BASE_CONFIG })
}

export const createUser = async ({ name, job, delay } = {}) => {
  return axios.post('/users', {
    data: { name, job },
    params: { delay },
    ...BASE_CONFIG
  })
}

export const updateUser = async ({ id, name, job, delay } = {}) => {
  return axios.put(`/users/${id}`, {
    data: { name, job },
    params: { delay },
    ...BASE_CONFIG
  })
}

export const deleteUser = async ({ id, delay } = {}) => {
  return axios.delete(`/users/${id}`, { params: { delay }, ...BASE_CONFIG })
}
