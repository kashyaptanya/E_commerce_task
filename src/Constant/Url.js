const REACT_APP_ENV_MODE = 'development'
let fileUrl = REACT_APP_ENV_MODE == 'development' ? process.env.REACT_APP_CF_IMG_URL_DEV : REACT_APP_ENV_MODE == 'production' ? process.env.REACT_APP_CF_IMG_URL_PROD : REACT_APP_ENV_MODE == 'stag' ? process.env.REACT_APP_CF_IMG_URL_STAG : undefined
export const baseUrl = process.env.REACT_APP_BASE_URL;