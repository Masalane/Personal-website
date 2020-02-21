'use strict'

let button = document.getElementById('addButton')

button.addEventListener('click', function () {
  let headerElement = document.getElementById('heading')
  headerElement.innerHTML = 'My new heading'
}, false)

