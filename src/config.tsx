export const API_ENDPOINT_PATH = process.env.NODE_ENV === 'production' ?
    "https://dev.d3f1qjpgfbf286.amplifyapp.com/api/editor" :
    "http://localhost:4000/api/editor"

console.log(process.env.REACT_APP_TYPE)
console.log(process.env.NODE_ENV)
