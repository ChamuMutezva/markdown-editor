//  "https://markdown-editor-ckm.netlify.app/api/editor"
// eslint-disable-next-line import/prefer-default-export
export const API_ENDPOINT_PATH =
    process.env.NODE_ENV === "production"
        ? "https://markdown-editor-back.onrender.com/"
        : "http://localhost:4000/api/editor";

// "https://lime-smoggy-camel.cyclic.app/"
