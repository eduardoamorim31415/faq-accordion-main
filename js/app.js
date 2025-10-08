function replacePlusAndMinus(event) { // passamos o objeto event como parâmetro da função
    let icon = event.target; // obtemos o elemento que disparou o evento
    let faq = icon.closest('.faq-line'); // seleciono o elemento pai passando o seletor de classe
    let paragraph = faq.querySelector('p'); // seleciono o elemento filho
    let currentBg = getComputedStyle(icon).backgroundImage; // obtenho o atual background
    if (currentBg.includes('icon-plus.svg')) {
       icon.style.backgroundImage = "url('../assets/images/icon-minus.svg')"
       paragraph.style.display = 'flex'
    } else {
        icon.style.backgroundImage = "url('../assets/images/icon-plus.svg')"
        paragraph.style.display = 'none'
    }
}