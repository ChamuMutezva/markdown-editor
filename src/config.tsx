//  "https://markdown-editor-ckm.netlify.app/api/editor" 
// eslint-disable-next-line import/prefer-default-export
export const API_ENDPOINT_PATH = process.env.NODE_ENV === 'production'
    ? "https://lime-smoggy-camel.cyclic.app/"
    : "http://localhost:4000/api/editor"
    console.log(process.env.NODE_ENV);