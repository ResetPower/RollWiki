function $(id) {
    return document.getElementById(id)
}

function jump(url) {
    history.pushState({}, null, url)
    window.dispatchEvent(new Event('popstate'))
}

class StringBuffer {
    constructor() {
        this.content = []
    }
    append(str) {
        this.content.push(str)
    }
    toString() {
        return this.content.join("")
    }
}

function get(url, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
        callback(this.status, this.responseText)
    }
    xhr.send('')
}

function post(url, body, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.onload = function () {
        callback(this.status, this.responseText)
    }
    xhr.send(body)
}

function post(url, body, callback, token) {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader("X-Access-Token", token)
    xhr.onload = function () {
        callback(this.status, this.responseText)
    }
    xhr.send(body)
}

function getCookie(name) {
    let cookies = document.cookie.split("; ")
    for (let i in cookies) {
        let arr = cookies[i].split("=")
        if (arr[0] == name) {
            return arr[1]
        }
    }
    return ""
}

function getParameter(name) {
    let search = document.location.search
    let parameters = search.substr(1, search.length).split("&")
    for (let i in parameters) {
        let arr = parameters[i].split("=")
        if (arr[0] == name) {
            return arr[1]
        }
    }
    return ""
}

function isEmpty(str) {
    return (str == '' || str == undefined)
}

function isNotEmpty(str) {
    return !isEmpty(str)
}
