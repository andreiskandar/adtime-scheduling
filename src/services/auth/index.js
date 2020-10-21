import history from 'app/history'

export default {
  login,
  logout,
}


// v->s->|->c->m->db

function login() {
  // ping backend with the username/password
  // it should return true/false or a token
  // if is authenticated
  history.push('/manager')
  // else
  // redirect to failed login page
}

function logout() {
  // destroy cookie/token
  history.push('/')
}