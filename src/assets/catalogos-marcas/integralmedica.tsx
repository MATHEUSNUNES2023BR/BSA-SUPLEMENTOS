import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function CatalogoIntegralMedica(){ 
    const nomes = items['integralmedica']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['integralmedica'].map( i =>
        ( `../Items-nutricionais/integralmedica/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='integral-medica.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default CatalogoIntegralMedica;