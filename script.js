let contain_main = document.querySelector('.container');
let thank_container = document.querySelector('.thank-you');
let submitbutton = document.querySelector('.submitbutton')
let rateagain = document.querySelector('.rateagain')
let stars = document.querySelectorAll('.star')
const result = document.getElementById('result')

stars.forEach((elem) => {
    elem.addEventListener('click', () => {
        result.innerText = elem.value;
        console.log(elem.value)
    })
});

submitbutton.addEventListener('click', submit)
rateagain.addEventListener('click', thanks)

function submit() {
    contain_main.classList.add('hide')
    thank_container.classList.remove('hide')
}

function thanks() {
    contain_main.classList.remove('hide')
    thank_container.classList.add('hide')
}