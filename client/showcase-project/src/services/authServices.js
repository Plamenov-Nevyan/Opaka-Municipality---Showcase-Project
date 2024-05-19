const baseURL = 'http://localhost:8000/auth'
const endpoints = {
    register: '/register',
    login: '/login',
}

export const registerUser = async(userData) => {
    let resp = await fetch(`${baseURL}${endpoints.register}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    let newUserData = await resp.json()
    localStorage.setItem('session', JSON.stringify({id: newUserData.id, role: newUserData.role, token: newUserData.userToken}))
}

export const loginUser = async(userData) => {
    console.log(userData)
    let resp = await fetch(`${baseURL}${endpoints.login}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    let loggedUser = await resp.json()
    localStorage.setItem('session', JSON.stringify({id: loggedUser.id, role: loggedUser.role, token: loggedUser.userToken}))
}