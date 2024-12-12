
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

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/documentos/CV--Juan-Diego-Limaco-Camarena--2025.pdf';  // Ruta al archivo PDF
    link.download = 'CV--Juan-Diego-Limaco-Camarena--2025.pdf';  // Nombre del archivo que se descargará
    document.body.appendChild(link);  // Agregar el enlace al DOM (no visible)
    link.click();  // Simular clic para iniciar la descarga
    document.body.removeChild(link);  // Eliminar el enlace del DOM
}

function descargarConstancia() {
    const link = document.createElement('a');
    link.href = 'assets/documentos/constancia-de-egresado.pdf';  // Ruta al archivo PDF
    link.download = 'constancia-de-egresado.pdf';  // Nombre del archivo que se descargará
    document.body.appendChild(link);  // Agregar el enlace al DOM (no visible)
    link.click();  // Simular clic para iniciar la descarga
    document.body.removeChild(link);  // Eliminar el enlace del DOM
}

document.addEventListener('DOMContentLoaded', function () {
    (function () {
        init();
    })();
});
