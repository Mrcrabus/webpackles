import _ from 'lodash'

window.addEventListener('load', function () {
    let element = document.querySelector('.main')
    let element2 = document.createElement("h1")
    let array = [1, 2, 3, 4, 5, 6]

    _.chunk(array)

    console.log(array)
    element2.innerHTML = "Hi, there"
    console.log(element2)

    element.innerHTML = "<h1>Hello</h1>"
    document.body.insertBefore(element2, element)
})
