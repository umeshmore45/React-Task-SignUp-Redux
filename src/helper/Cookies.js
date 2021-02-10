export const setCookies = ({ name, value, path }) => {
  //   document.cookie = `${name}=${value};path=${path};max-age=31536000`;
  document.cookie = `${name}=${value};max-age=31536000`;
};

export const getCookies = (name) => {
  let cok = document.cookie.split("=");
  console.log(cok[1]);
  return cok[1];
};

export const removeCookies = (name) => {
  document.cookie = "";
};
