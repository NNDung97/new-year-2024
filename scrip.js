const container = document.getElementById('fireworks_container');
const fireworksconfig = {
    autoresize: false,
    opacity: 0.1,
    acceleration: 1.00,
    friction: 0.97,
    gravity: 2.28,
    particles: 100,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 15,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 360
    },
    delay: {
        min: 30,
        max: 60
    },
    rocketsPoint: {
        min: 40,
        max: 60
    },
    lineWidth: {
        explosion: {
            min: 1,
            max: 6
        },
        trace: {
            min: 1,
            max: 2
        }
    },
    brightness: {
        min: 60,
        max: 100
    },
    decay: {
        min: 0.005,
        max: 0.03
    },
    mouse: {
        click: false,
        move: false,
        max: 1
    }
};
// const fireworks = new Fireworks(container, { /* options */ })
// fireworks.start()
document.addEventListener('DOMContentLoaded', function () {
    const fireworks = new Fireworks.default(container);
    fireworks.updateOptions(fireworksconfig);
    fireworks.start();
})