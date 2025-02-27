$( document ).ready(function () {
    
    // MAIN TITLE ANIMATION
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline(1)
      .add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        delay: (el, i, l) => 80 * (l - i)
    });
})