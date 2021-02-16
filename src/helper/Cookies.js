export const setCookies = ({ name, value, path, max }) => {
  //   document.cookie = `${name}=${value};path=${path};max-age=31536000`;
  document.cookie = `${name}=${value};max-age=${max}`;
};

export const getCookies = (name) => {
  let mt =
    document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";

  return mt;

  // let cok = document.cookie.split("=");

  // return cok[1];
};

export const removeCookies = (name) => {
  document.cookie = `${name}= `;
};
