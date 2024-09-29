const ticket = document.querySelectorAll('.buy-ticket')
const title = document.getElementById('start')
const menu = document.querySelectorAll('.scale')

ticket.forEach(tik => {
    tik.onclick = () =>
        alert('Sorry but no tickets')
});

document.body.onscroll = () => {
    if (window.scrollY === 0) { 
        ticket.forEach(tik => {
            tik.style.color = 'white'; 
        });
    } else { 
        ticket.forEach(tik => {
            tik.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        });
    }
};
    
title.onmouseenter = () => {
    title.style.color = '#' + Math.floor(Math.random()*16777215).toString(16)
}
title.onmouseleave = () => {
    title.style.color = '#871321'
}

menu.forEach(m => {
    m.onmouseenter = () =>
        m.style.transform = 'scale(105%)'  
});

menu.forEach(m => {
    m.onmouseleave = () =>
        m.style.transform = 'scale(100%)'  
});

document.body.onmousemove = () => {
        console.log('user uses page');
    }

document.body.onkeydown = (event) => {
    console.log('user uses keyboard');
    console.log('down', event.key);

}