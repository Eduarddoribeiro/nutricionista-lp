$(document).ready(function() {
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-times'); /*Procura o 'i' (ícone) dentro do elemento mobile-btn*/
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none'); /*Se scrollPosition for menor ou igual a 0 (ou seja, o topo da página está visível):
            A sombra no cabeçalho é removida (box-shadow: none).*/
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        } /*Caso contrário (o usuário rolou a página para baixo):
        É aplicada uma sombra suave ao cabeçalho com a propriedade CSS box-shadow: 5px 1px 5px rgba(0, 0, 0, 0.1).*/

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight();

            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
         navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '2%'
    })
    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '2%'
    })
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '2%'
    })
    ScrollReveal().reveal('.feedback', {
        origin: 'left',
        duration: 1000,
        distance: '2%'
    })
});