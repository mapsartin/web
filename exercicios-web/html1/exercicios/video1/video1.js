function configurarVideo(id){
    const video = document.getElementById(id)
    video.oncontextmenu = () => false
    document.querySelector(`[mas-play=${id}]`).onclick = e => video.play()
    document.querySelector(`[mas-pause=${id}]`).onclick = e => video.pause()

    setInterval(() => {
        const porcento = (video.currentTime / video.duration) * 100
        const valorDiv = document.querySelector(`[mas-progresso=${id}] > div`)
        valorDiv.style.width = `${porcento}%`
        valorDiv.innerHTML = `${porcento.toFixed(1)}%`
    }, 500) // 500 ms
    

}

configurarVideo('meuVideo')