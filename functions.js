const axios = require("axios");

const functions = {
  add: (n1, n2) => n1 + n2,
  fetchUser: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then(res => res.data)
      .catch(err => console.log(err));
  }
};

module.exports = functions;
