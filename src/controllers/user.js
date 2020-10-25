import history from 'app/history';
import axios from 'axios';

export default {
  getRole,
  isAuthenticated,
  login,
  logout,
}

function getRole() {
  try {
    const {name: role} = JSON.parse(localStorage.getItem('user'))
    return role
  } catch(err) {
    console.error(`userController: ${err}`)
  }
}

function isAuthenticated() {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    // const {token} = JSON.parse(localStorage.getItem('user'))
    // call backend /token and verify token is valid on the backend and return
    // true/false depending on what the backend says
    const {name: role} = user
    if (role === 'admin' || role === 'employee') {
      return true
    }
    return false
  } catch(err) {
    console.info(`userController: ${err}`)
    return false
  }
}

async function login(email, password) {
  try {
    const res = await axios.post('/', {
      email,
      password,
    })
    const user = res.data

    localStorage.setItem('user', JSON.stringify(user))

    const {name: role} = user
    const redirectTo = role === 'admin'
      ? '/manager'
      : '/employee'
    history.push(redirectTo)
  } catch(err) {
    console.error(err)
  }
}
  
function logout() {
  localStorage.removeItem('user');
  history.push('/');
}