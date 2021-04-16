import axios from 'axios';

export default {
  login,
};

async function login(email, password) {
  try {
    const res = await axios.post('/', {
      email,
      password,
    });
    const rawUser = res.data;
    const user = {
      role: rawUser.name,
      username: rawUser.username,
      avatar: rawUser.avatar,
      user_id: rawUser.user_id,
    };
    return user;
  } catch (error) {
    console.error('error:', error);
  }
}
