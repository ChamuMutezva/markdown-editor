export const API_ENDPOINT_PATH = process.env.REACT_APP_TYPE !== 'production'
  ? "http://localhost:4000/api/editor"
  : "https://dev.d3f1qjpgfbf286.amplifyapp.com/api/editor"

console.log(process.env.REACT_APP_TYPE)
console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_API_URL)