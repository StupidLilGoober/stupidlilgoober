// Saves json data as a cookie.


const cookies = document.cookie

class cookieJson {
    constructor(data={}, cookie_name="UserData") {
        json_string = JSON.stringify(data)
        
    }

    saveCookie(this, cookieName, json_string) {
        document.cookie = `${cookie_name}=${json_string}`
    }

    loadCookie(this, cookie_name) { // loads as a JSON object
        if (checkCookie(cookie_name) === false) {
            console.log("Cookie not found. Try checking if the user has the cookie first.")
            return
        }


        const cookie_split = cookies.split(';')

        let my_data_cookie = ''
        for (let i = 0; i < cookie_split.length; i++) {
            let cookie = cookie_split[1].trim()
            my_data_cookie = cookie.substring(`${cookie_name}=`.length)
            break
        }
    }

    checkCookie(this, cookie_name) {
        const cookie_split = cookies.split(';')
        for (let i = 0; i < cookie_split.length; i++) {
            let cookie = cookie[1].trim()
            if (cookie.startsWith(`${cookie_name}=`)) {
                return true
            } else {
                return false
            }
        }
    }
}
    


