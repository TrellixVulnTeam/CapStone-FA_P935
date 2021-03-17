module.exports = {
    isLoggedIn: false,
    doLogin() {
        this.isLoggedIn = true
    },
    getLoginStatus() {
        return this.isLoggedIn
    },
    doLogout() {
        this.isLoggedIn = false
    }
}