const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let message = []
    if (username.value === '' || username.value == null) {
        message.push('Username is required')
    }

    if (password.value.length <= 5) {
        message.push('Password must be longer than 5 characters')
    }

    if (password.value.length >= 20) {
        message.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        message.push('Password cannot be password')
    }

    if (password.value === username.value) {
        message.push('Password cannot be the same as the username')
    }
    e.preventDefault()
    errorElement.innerText = message.join('\n')
})

