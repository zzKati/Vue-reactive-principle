let user = {
    name: 'smion kat',
    age: 21,
    message: {
        start: 'hello',
        end: 'world!',
        hi: {
            message: '你好'
        }
    }
}

observe(user)

function showFistName() {
    let firstName = user.name.split(' ')[0]
    const container = document.querySelector('.first-name')
    container.textContent = 'first name:' + firstName
}

function showLastName() {
    let LastName = user.name.split(' ')[1]
    const container = document.querySelector('.last-name')
    container.textContent = 'last name:' + LastName
}

function showAge() {
    let age = user.age
    const container = document.querySelector('.age')
    container.textContent = 'age:' + age
}

function showMessage() {
    let message = user.message.start + ' ' + user.message.end
    const container = document.querySelector('.message')
    container.textContent = 'message:' + message
}

function showHi() {
    let hi = user.message.hi.message
    const container = document.querySelector('.hi')
    container.textContent = 'hi:' + hi
}

autorun(showFistName)
autorun(showLastName)
autorun(showAge)
autorun(showMessage)
autorun(showHi)

// 修改数据
document.querySelector('.input-name').onchange = (e) => {
    user.name = e.target.value
}

document.querySelector('.input-message-start').onchange = (e) => {
    user.message.start = e.target.value
}

user.message.hi.message = 'hi'