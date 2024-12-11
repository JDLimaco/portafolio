
function init() {
    // Esperar a que el modal esté completamente visible

    document.getElementById('modalPosPeruAppLecturaBalanza').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperPosPeruAppLecturaBalanza', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });

    document.getElementById('modalPosPeruERP').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperPosPeruERP', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });

    document.getElementById('modalSagitarioSystemIntranet').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperLawnTennisIntranet', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });
    document.getElementById('modalSagitarioSystemAplicacionMovil').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperLawnTennisAplicacionMovil', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });
    document.getElementById('modalRzServicioExpressSistemaDelivery').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperRzServicioExpressSistemaDelivery', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });
    document.getElementById('modalRzServicioExpressAPIRest').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperRzServicioExpressAPIRest', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });
    document.getElementById('modalBilleteraAlertSistemaEmpresarial').addEventListener('shown.bs.modal', function () {
        // Inicializar o actualizar el Swiper cuando el modal esté visible
        const swiper = new Swiper('#swiperBilleteraAlertSistemaEmpresarial', {
            effect: 'flip',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }
        });
    });

}

document.addEventListener('DOMContentLoaded', function () {
    (function () {
        init();
    })();
});
