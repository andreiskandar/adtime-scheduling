import history from 'app/history'

export default {
  login,
  logout,
}


// v->s->|->c->m->db
const data = {}

function login() {
  let request = {
    email: document.getElementById('emailInput').value,
    password: document.getElementById('passwordInput').value,
  }

  fetch('/', {
    method: "POST",
    body: "MY DATA",
    headers: {
      "Content-Type": "applicationa/json"
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  })
  // ping backend with the username/password
  // it should return true/false or a token
  // if is authenticated
  // history.push('/manager')
  // else
  // redirect to failed login page
}

function logout() {
  // destroy cookie/token
  history.push('/')
}