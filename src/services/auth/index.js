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
  const body = { email, password };
  axios
    .post(`${REACT_APP_BASE_URL}`, body)
    // .post(`/`, body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
