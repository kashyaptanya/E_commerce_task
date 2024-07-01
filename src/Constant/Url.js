const REACT_APP_ENV_MODE = 'development'
let fileUrl = REACT_APP_ENV_MODE == 'development' ? process.env.REACT_APP_CF_IMG_URL_DEV : REACT_APP_ENV_MODE == 'production' ? process.env.REACT_APP_CF_IMG_URL_PROD : REACT_APP_ENV_MODE == 'stag' ? process.env.REACT_APP_CF_IMG_URL_STAG : undefined
const baseUrl = process.env.REACT_APP_BASE_URL;

const removeBg_Api = `6A9GrpnbPpBofJtsTtJXceWW`;
const firebaseApiKey = `BEc-w0wh3iBe_j9_4MJ-u1QIbjD39yrvjJgiAuodebpRpZiPMSGo0FQm3C1oiYgK7cTXKXOcwaIa-aWWDYMrk-M`; // MWW
const firebaseServerKey = `AAAAMwnUHGA:APA91bGt2uW5hsHwbyEig-buyOm9X7iw80yF1n2IqdKJghftaWeBwr0pdbc2gT87pUSoW6iv4Y655v_tBUYKgBJdcSO4IARlo_L2mwfa1_TH6X1Q_kOfUVOruCfcorElwqu0fKQVb1gx`;

export const googleMapKey = `AIzaSyCo--TR5Skyf2-Jj0qS4kymvpuuAonexGg`; // Client  Glenwood

export {baseUrl,fileUrl};
export { removeBg_Api, firebaseApiKey, firebaseServerKey };