import axios from "axios";

export const downloader = (url, name, filePrefix) =>
  axios({
    url: url,
    method: "GET",
    responseType: "blob", // important
  }).then((response) => {
    const src = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = src;
    link.setAttribute("download", `${name}.${filePrefix}`); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
