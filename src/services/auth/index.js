import history from 'app/history'
import axios from 'axios'

export default {
  login,
  logout,
}


// v->s->|->c->m->db
const data = {}

function login(email, password) {
  console.log("EMAIL", email)
  console.log("PASSOWRD", password)     
  return axios
    .post('/', {
      email,
      password,
    })
    .then(() => {
      console.log("Post successful!");
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
  localStorage.removeItem('user');
  history.push('/')
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}