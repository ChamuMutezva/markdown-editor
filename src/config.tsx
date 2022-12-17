export const API_ENDPOINT_PATH = process.env.REACT_APP_HOST_TYPE === 'production' ?
    "https://dev.d3f1qjpgfbf286.amplifyapp.com/api/editor" :
    "http://localhost:4000/api/editor"

console.log(process)