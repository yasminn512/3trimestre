const getCSS = (variavel) => {
   return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

function criargrafico (data,layout){
    const grafico = document.createelemet('div')
    grafico.className='grafico'
    documentgetElementById('grafico-container').appendChild(grafico)
    const config = { 
        reponsive: true,
        displayModeBar:false
    }
    plotly.newPlot(grafico,data,layout,config)
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

export{ getCSS,tickConfig,criargrafico,incluirTexto