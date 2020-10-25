import axios from 'axios';

export default {
  login,
}

async function login(email, password) {
  const res = await axios.post('/', {
    email,
    password,
  })
  const rawUser = res.data
  const user = {
    role: rawUser.name,
  }
  return user
}