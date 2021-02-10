import axios from "axios";

const hitApi = async ({
  method,
  url,
  body = {},
  headers = {},
  params = {},
}) => {
  switch (method) {
    case "POST":
      return await axios
        .post(url, body, {
          params: { ...params },
          headers: { ...headers },
        })
        .then((data) => {
          return data;
        })
        .catch((e) => {
          console.log(e);
        });

    default:
      return await axios
        .get(url, {
          headers: { ...headers },
        })
        .then((data) => {
          return data;
        })
        .catch((e) => {
          console.log(e);
        });
  }
};

export default hitApi;
