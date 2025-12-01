// Menu Hamburguer - Código Corrigido
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        console.log('Menu hamburguer clicado!'); // Para debug
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Impedir scroll do body quando menu está aberto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(n => {
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Carousel de Projetos - Versão Final
document.addEventListener('DOMContentLoaded', function() {
    const projetos = [
        {
            image: './imagens/fundo-hero.png',
            title: 'Reforma Residencial',
            description: 'Projeto completo com visualização 3D e execução de alta qualidade',
            tags: ['3D SketchUp', '120m²', '60 dias']
        },
        {
            image: './imagens/piscina-2.jpg',
            title: 'Construção de Piscina',
            description: 'Locação e construção de áreas de lazer com piscina',
            tags: ['Lazer', 'Piscina', 'Área Externa']
        },
        {
            image: './imagens/3d.jpg',
            title: 'Projeto 3D Realista',
            description: 'Visualização completa do projeto antes da execução',
            tags: ['SketchUp', 'V-Ray', '360°']
        },
        {
            image: './imagens/gerais.jpg',
            title: 'Serviços Gerais',
            description: 'Assistência completa em serviços gerais e profissionais',
            tags: ['Manutenção', 'Reparos', 'Consultoria']
        },
        {
            image: './imagens/casa-obra5.jpg',
            title: 'Construção Residencial',
            description: 'Casa própria do terreno ao acabamento final',
            tags: ['Alvenaria', 'Acabamento', '120 dias']
        }
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    projetos.forEach((projeto) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        // Corrigir nome da imagem com espaço
        let imagePath = projeto.image.replace('casa-obra 5.jpg', 'casa-obra-5.jpg');

        slide.innerHTML = `
            <div class="project-image">
                <img src="${imagePath}" alt="${projeto.title}"
                    onerror="this.src='https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&w=800&q=80'; this.alt='Imagem padrão'">
                <div class="project-overlay"></div>
            </div>
            <div class="slide-content">
                <h3>${projeto.title}</h3>
                <p>${projeto.description}</p>
                <div class="project-tags">
                    ${projeto.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });

    // SWIPER CONFIG CORRIGIDA
    const swiper = new Swiper('.projetos-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                centeredSlides: true
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 20,
            }
        },

        effect: 'slide',
        speed: 600,
        preloadImages: false,
        lazy: { loadPrevNext: true },
        watchSlidesProgress: true,
    });

    swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());

    // Para debug: verificar se o menu existe
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
});

// Fechar menu ao clicar fora (opcional)
document.addEventListener('click', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu && navMenu.classList.contains('active')) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});