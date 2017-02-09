export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export const logIn = () => {
    console.log('in action login')
    return {
        type: LOGIN
    }
}


export const logOut = () => ({
    type: LOGOUT
})
