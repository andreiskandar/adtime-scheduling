import history from 'app/history';
import axios from 'axios';
const { REACT_APP_BASE_URL } = process.env;

export default {
  login,
  logout,
};

// v->s->|->c->m->db
const data = {};

function login(email, password) {
  // axios.post('http://localhost:3001/')
  //   .then(res => console.log({message:'hello'}))

  console.log('EMAIL', email);
  console.log('PASSOWRD', password);
  const body = { email, password };
  console.log('EMAIL?', body);
  axios
    .post('/', body)
    .then((res) => {
      console.log(res);
      history.push('/manager');
    })
    .catch((err) => console.log(err));

  // axios({
  //   method: 'post',
  //   url: '/',
  //   data: {
  //     email: email,
  //     password: password,
  //   },
  //   validateStatus: (status) => {
  //     return true;
  //   },
  // }).catch(error => {

  // }).then(response => {
  //   console.log("Post successful!");
  // })

  // axios
  //   .post('/', {
  //     email: email,
  //     password: password,
  //   })
  //   .then(() => {
  //     console.log("Post successful!");
  //   })
  //   .catch((e) => console.log("Error", e));

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
  history.push('/');
}

function handleResponse(response) {
  return response.text().then((text) => {
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
