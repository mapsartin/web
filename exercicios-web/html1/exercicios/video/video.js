

//    function barra(){
//     const elem = document.getElementById('barra')
//     let video = document.getElementById('meuVideo')
//     exibirBarra(video, elem)    
//     console.log('ttest')
//     setTimeout(barra(),1)
// }
   
// function exibirBarra(video, elem){
//     elem.style.display='block'
//     let duracao = parseInt(video.duration)
//     let atual = parseInt(video.currentTime)
    
//     const progresso = 100 * (atual/duracao)
    
//     elemento.style.width = `${progresso}%`
//     console.log(`${progresso}%`)    
// }

// barra()



function barra(){
   
    setTimeout(() => barraProg(),1)
    
}

function barraProg(){
    let video = document.getElementById('meuVideo')
    const elemento = document.getElementById('barra')
    let duracao = parseInt(video.duration)
    let atual = parseInt(video.currentTime)
    const progresso = 100 * (atual/duracao)

    elemento.style.display = 'block'
    elemento.style.width = `${progresso}%`
    
    console.log(`${progresso}%`)
    setTimeout(() => barraProg(),1)
}

barraProg()