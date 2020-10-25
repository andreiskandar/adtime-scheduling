import {user as userModel} from 'models';
import history from 'app/history';

export default {
  getRole,
  isAuthenticated,
  login,
  logout,
}

function getRole() {
  try {
    const { role } = JSON.parse(localStorage.getItem('user'))
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
    console.log('hello', user)
    const {role} = user
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
  const user = await userModel.login(email, password)
  localStorage.setItem('user', JSON.stringify(user))
}
  
function logout() {
  localStorage.removeItem('user');
  history.push('/');
}