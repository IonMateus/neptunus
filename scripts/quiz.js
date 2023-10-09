let checkAnswer = () => {
        let QuantasCorretas = 0
        let RespostasCorretas = document.getElementsByClassName('CorrectAnswer')
        for (let indice = 0; indice < RespostasCorretas.length; indice++) {
            if (RespostasCorretas[indice].checked) {
                QuantasCorretas += 1
            }
        }
        if(QuantasCorretas < 5){
            document.querySelector("#result").innerHTML=`You just got ${QuantasCorretas} questions right &#128542`
        } else{
            document.querySelector("#result").innerHTML=`Well done! You got ${QuantasCorretas} questions right &#128512`
        }
        markCorrectAnswers()
        
}

let markCorrectAnswers = () => {
    let RespostasCorretas = document.getElementsByClassName('labelCorrectAnswer')
    for (let i = 0; i < RespostasCorretas.length; i++) {
        RespostasCorretas[i].style.color = "rgb(18, 254, 18)"
    }
}