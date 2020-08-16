const users = [
    { username: 'user', password: 'normaluser', isAdmin: false },
    { username: 'admin', password: 'superuser', isAdmin: true },
]

const login = (userInfo) => {
    return new Promise((resolve, reject) => {
        const correctUser = users.find(
            (user) =>
                user.username === userInfo.username &&
                user.password === userInfo.password
        )

        if (correctUser) {
            resolve(correctUser)
        } else {
            reject('Sorry wrong credentials 😞')
        }
    })
}

const logout = () => {
    return localStorage.removeItem('currentUser')
}

const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem('currentUser')) ? true : false
}

const isAdmin = () => {
    console.log(JSON.parse(localStorage.getItem('currentUser'))?.isAdmin)
    return JSON.parse(localStorage.getItem('currentUser'))?.isAdmin
        ? true
        : false
}

export { login, logout, isAuthenticated, isAdmin }
