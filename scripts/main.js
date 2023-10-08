let isAudio = true



function startAnimation() {
    const btnExplore = document.getElementById('btnExplore');
    
    btnExplore.classList.add('active');

    setTimeout(() => {
        window.location.href = "pages/lineChart.html";
    }, 2000);
}



function playAudio(){
    const audio = document.getElementById('audio');
    if(isAudio){
        audio.pause();
        isAudio = false
    }else{
        audio.play();
        isAudio = true
    }
}



