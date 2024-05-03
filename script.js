let button = document.querySelector('#btn')
button.addEventListener('click', () =>{
    document.getElementById('hide').classList.toggle('hide')
    document.body.classList.toggle('bg-rosa')
    let video = document.getElementById('video')
    video.play()
})