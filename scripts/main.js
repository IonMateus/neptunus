

function startAnimation() {
    const btnExplore = document.getElementById('btnExplore');
    
    btnExplore.classList.add('active');

    setTimeout(() => {
        window.location.href = "pages/lineChart.html";
    }, 2000);
}


