const about_me = document.querySelector('.nav_about_me');
const kontact = document.querySelector('.nav_kontact');
const portfolio = document.querySelector('.nav_portfolio')
const about_me_close = document.querySelector('#about_me_close');
const kontact_close = document.querySelector('#kontact_close');
const portfolio_close = document.querySelector('#portfolio_close');
const youTalk = document.querySelector('.youTalk')

about_me.addEventListener('click', () => {
    document.querySelector('#about_me').style.display = 'initial'
});
kontact.addEventListener('click', () => {
    document.querySelector('#kontact').style.display = 'initial'
});
portfolio.addEventListener('click', () => {
    document.querySelector('#portfolio').style.display = 'initial'
})

about_me_close.addEventListener('click', () => {
    document.querySelector('#about_me').style.display = 'none'
});
kontact_close.addEventListener('click', () => {
    document.querySelector('#kontact').style.display = 'none'
});
portfolio_close.addEventListener('click', () => {
    document.querySelector('#portfolio').style.display = 'none'
});

youTalk.addEventListener('mouseover', () =>{
    document.querySelector('.info_blog').style.display = 'initial'
})
youTalk.addEventListener('mouseout', () =>{
    document.querySelector('.info_blog').style.display = 'none'
})