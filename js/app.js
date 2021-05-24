let _ = document;
let header = _.querySelector('header');
let toggle = _.querySelector('.toggle');
let menu = _.querySelector('.menu');
let menuLinks = _.querySelectorAll('.menu ul li');
let headerBtnsLink = _.querySelectorAll('.header-btns ul li');  
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0);
})

toggle.addEventListener(('click'), ()=>{
    changeStatus();
})

menuLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        changeStatus();
    })
})
headerBtnsLink.forEach((btnLinks)=>{
    btnLinks.addEventListener('click', ()=>{
        changeStatus();
    })
})
function changeStatus(){
    menu.classList.toggle('change');
    toggle.classList.toggle('change-toggle');
}
// sec3
let personDesc =  _.querySelector('.person-desc');
let text = _.querySelector('.text');
let images = _.querySelectorAll('.logo-container span');
personDesc.innerHTML = text.children[0].innerHTML;

for (let i of images.entries()){
    i[1].addEventListener('click', ()=>{
        let index = i[0];
        let child = text.children[index];
        personDesc.innerHTML = child.innerHTML;
        let style = i[1].currentStyle || window.getComputedStyle(i[1], false);
        let src = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        let personLogo = personDesc.children[3].children[0]
        console.log(personLogo);
        personLogo.style.backgroundImage = `url(${src})`;
    })
}