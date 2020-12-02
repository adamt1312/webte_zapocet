$( document ).ready(function () {

    // BUTTON ANIMATION + DESCRIPTION
    anime({
        targets: '.button',
        bottom: '5.5vh',
        opacity: 1,
        delay: 4000 
    });

    anime.timeline({loop: true})
      .add({
        targets: '.button',       
        scale: {
          value: 1.2,
          duration: 1000
        },
        easing: 'easeInOutCubic'
      })
      .add({
        targets: '.button',        
        scale: {
          value: 1,
          duration: 1000
        },              
        easing: 'easeInOutCubic'
      });   
      
    anime({
      targets: '.description_txt',
      opacity: [0,1],
      duration: 20000,
      delay: 2500
    });
})