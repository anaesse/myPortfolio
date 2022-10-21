let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.onclick = () => {
        listItems.forEach(item =>
            item.classList.remove('active'));
            item.classList.add('active');
    }
})


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
var type = new Typed('.typing-text',{
    strings : [ 'a Technical writer', 'a Front-end developer', 'an IT support specialist', 'a Hardware technician', 'a technical writer' ],
    typeSpeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
    document.querySelector('.follow').style.background = background;
}));

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});