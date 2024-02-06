const API_KEY="AIzaSyBPdwdnhLk718_qxKhYSzyx1r5CZSCklvY"

export const firebaseSignUpURL=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

export const firebaseLoginURL=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const changePasswordURL=`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`