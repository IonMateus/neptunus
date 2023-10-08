let checkAnswer = () => {
        let QuantasCorretas = 0
        let RespostasCorretas = document.getElementsByClassName('CorrectAnswer')
        for (let indice = 0; indice < RespostasCorretas.length; indice++) {
            if (RespostasCorretas[indice].checked) {
                QuantasCorretas += 1
            }
        }
        document.querySelector("#result").innerHTML=QuantasCorretas
        markCorrectAnswers()
        
}

let markCorrectAnswers = () => {
    let RespostasCorretas = document.getElementsByClassName('labelCorrectAnswer')
    for (let i = 0; i < RespostasCorretas.length; i++) {
        RespostasCorretas[i].style.color = "rgb(18, 254, 18)"
    }
}