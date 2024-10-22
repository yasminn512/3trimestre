import { getCSS , criargrafico } from "./common";

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontet.com/guilhermeonrails/api/main/
    redes-redesFavoritasMundo.json'
    const res = await fetch(url)
    const dados= awaitres.json()
    const redes = Object.values(dados)
}
const data =[
    {
      values:valores,
      labels: redes,
      type:'pie',
      textinfo:'label+percent'  
    }
]
 
constlayout= {
    plot_bgcolor:getCSS('--bg-color')
    peper_bgcolor:getCSS('--bg-color')
    height:700,
    title:{
        text: 'redes sociais que oos usúarios mais gostam',
        x:0,
        font:{
            color:getCSS('--primary-color'),
            family:getCSS('--font'),
            size:30
        }
    }
},
legend:{
    font:{
        color:getCSS('--primary-color'),
        size:16
    }
}
    }
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild('grafico')
plotly.newPlot(grafico,data,layout)

{

    redesFavoritasMundo()
}