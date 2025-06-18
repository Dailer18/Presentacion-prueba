// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', function() {

    // Crea una línea de tiempo para las animaciones
    var tl = anime.timeline({
        easing: 'easeOutExpo',
    });

    // Animación 1: "He aquí..."
    tl.add({
        targets: '.line-container:nth-child(1)',
        opacity: [0, 1],
        scale: [1.5, 1],
        duration: 1200,
    }).add({
        targets: '.ml1 .letters',
        opacity: [0, 1],
        scale: [3, 1],
        duration: 1000,
    }, '-=800'); // Empieza 800ms antes de que termine la anterior

    // Animación 2: "...luego de noches sin dormir"
    tl.add({
        targets: '.line-container:nth-child(2)',
        opacity: [0, 1],
        scale: [1.5, 1],
        duration: 1500,
        delay: 500, // Pausa dramática
    });

    // Animación 3: "...puedo decir..."
    tl.add({
        targets: '.line-container:nth-child(3)',
        opacity: [0, 1],
        scale: [1.5, 1],
        duration: 1500,
        delay: 200,
    });

    // Animación 4: El montaje frenético de conceptos
    tl.add({
        targets: '.line-container.frenzy',
        opacity: [0, 1],
        scale: [1.5, 1],
        duration: 800,
        delay: 1000,
    }).add({
        targets: '.frenzy .ml4',
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100) // Aparecen uno tras otro rápidamente
    }, '-=500');

    // Animación 5: "...para decir:"
    tl.add({
        targets: '.line-container:nth-child(5)',
        opacity: [0, 1],
        scale: [1.2, 1],
        duration: 1000,
        delay: 800,
    });

    // Animación 6: "hola,"
    tl.add({
        targets: '.line-container.final:nth-child(6)',
        opacity: [0, 1],
        scale: [2, 1],
        duration: 1000,
        delay: 1200,
    });
    
    // Animación 7: "y adiós."
    tl.add({
        targets: '.line-container.final:nth-child(7)',
        opacity: [0, 1],
        scale: [1, 1],
        duration: 1500,
        delay: 500,
    });
    
    // Final: Todo se desvanece
    tl.add({
        targets: 'body',
        opacity: [1, 0],
        duration: 2000,
        delay: 2500,
        easing: 'easeInOutQuad'
    });

});
