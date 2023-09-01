if (document.contentType === 'application/json') {
    const content = document.querySelector('pre')
    
    const codeElement = document.createElement('code')
    codeElement.classList.add('language-json')

    const parsedJson = JSON.parse(content.innerHTML)
    const stringJson = JSON.stringify(parsedJson, null, 2)

    codeElement.innerHTML = stringJson.replace(/"([^"]+)":/g, '$1:')

    content.innerHTML = null
    content.appendChild(codeElement)

    hljs.highlightAll()
}