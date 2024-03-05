import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function CatalogoIntegralMedica(){ 
    const nomes = items['integralmedica']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['integralmedica'].map( i =>
        ( `../Items-nutricionais/${i.replace(expressaoRegular, '-')}.png` )
    )
    console.log(caminhos)
    return(
        <Estrutura logo='absolut.png' produto={ {nome:nomes, caminho:caminhos}} />
    )}
export default CatalogoIntegralMedica;