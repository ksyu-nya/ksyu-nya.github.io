document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navBar = document.querySelector('.navigation__bar');
    const navLinks = document.querySelectorAll('.navigation__bar a'); 
    const logoLink = document.querySelector('.navigation__wrapper a');

    burger.addEventListener('click', () => {
        navBar.classList.toggle('active');
        burger.classList.toggle('active');
    });

    const allLinks = Array.from(navLinks);
     allLinks.push(logoLink)


    allLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // предотвращаем дефолтный переход

            const targetId = this.getAttribute('href'); // id нужного раздела
            const targetSection = document.querySelector(targetId); // нужный раздел по ID

            if(targetSection){
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

                // закрываем меню, если оно открыто
            if(navBar.classList.contains('active')){
              navBar.classList.remove('active')
               burger.classList.remove('active')
            }
        });
    });
});