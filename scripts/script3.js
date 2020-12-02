$( document ).ready(function () {
    
    let button = document.getElementsByClassName('button')[0]

    // BUTTON CLICK - TRANSITION & REST
    button.addEventListener('click', () => {
        console.log('clicked')        
        anime.timeline(1)  
        .add({
            targets: '.transitionDiv',
            width: '100%',
            height: '100%',
            easing: 'easeOutQuint' 
        })
        .add({
            targets: '.ml1',
            begin: function() {
                document.querySelector('.button').remove()
                document.querySelector('.description_txt').remove()
            },
        })
        .add({
            targets: '#txt',
            opacity: [0,1],
            duration: 100
        })             
        .add({
            targets: '.transitionDiv',
            width: '100%',
            height: '50%',
            borderTopLeftRadius: ['0px', '25px'],
            borderTopRightRadius: ['0px', '25px'],
            easing: 'easeOutQuint' ,
            begin: function() {
                document.getElementById('topBar').style.display = 'flex'
                document.getElementById('bottomContainer').style.display = 'flex'
                document.getElementsByClassName('transitionDiv')[0].style.position = 'unset'
            }
        })          
    }); 
})