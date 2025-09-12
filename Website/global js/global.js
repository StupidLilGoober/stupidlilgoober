function checkCookie(cookieName) {
    const cookies = document.cookie;
    if (cookies.indexOf(cookieName + "=") !== -1) {
        return true; // Cookie exists
    } else {
        return false; // Cookie does not exist
    }
}