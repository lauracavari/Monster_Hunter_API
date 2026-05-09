$(document).ready(function(){


    console.log("ready!");



    //GSAP Animation

        console.log("JS FUNCIONANDO");
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(".img-monster", {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#carouselExampleIndicators",
            start: "top 80%",   // cuando entra en pantalla
            toggleActions: "play none none reverse"
        }
        });

        gsap.to(".img-monster2", {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#carouselExampleIndicators",
            start: "top 80%",   // cuando entra en pantalla
            toggleActions: "play none none reverse"
        }
        });       



});