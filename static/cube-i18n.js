function i18n(settings) {
    const path = settings.path;
    const language = settings.language;
    const root = settings.root;
    const cache = settings.cache;
    const args = settings.args;

    const xhr = new XMLHttpRequest();

    let url;
    if (root==false) {
        url = `${path}/${language}.json`
    } else {
        url = `/${path}/${language}.json`
    }

    if (cache==false) {
        url = url.concat('?'+new Date().getTime())
    } else if (args!=undefined) {
        url = url.concat('?'+args)
    }
    xhr.open('GET', url, false)
    xhr.send(null);
    let DONE = this.DONE || 4;
    if (xhr.readyState === DONE) {
        let data = xhr.responseText;
        let parsed = JSON.parse(data);

        let elements = document.querySelectorAll('*[i18n]');
        for (let i in elements) {
            let element = elements[i];
            if (typeof(element)=="object") {
                let key = element.getAttribute('i18n');
                if (key.startsWith("[")) {
                    let end = key.indexOf("]")
                    let attr = key.substring(1, end)
                    let src = key.substring(end+1, key.length)
                    element.setAttribute(attr, parsed[src])
                } else if (key.startsWith("(")) {
                    let end = key.indexOf(")")
                    let languages = key.substring(1, end).split("/")
                    let strings = element.getAttribute('i18ns').split("/")
                    let found = false
                    for (let i in languages) {
                        if (language==languages[i]) {
                            element.innerHTML = strings[i];
                            found = true
                        }
                    }
                    if (!found) {
                        element.innerHTML = strings[0]
                    }
                } else {
                    element.innerHTML = parsed[key];
                }
            }
        }

        return parsed;
    }
}
