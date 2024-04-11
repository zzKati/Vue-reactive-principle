let user = {
    name: 'smion kat',
    age: 21
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

autorun(showFistName)
autorun(showLastName)
autorun(showAge)

// 修改数据
document.querySelector('input').onchange = (e) => {
    user.name = e.target.value
}
