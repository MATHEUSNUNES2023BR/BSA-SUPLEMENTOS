import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Nutrata(){ 
    const nomes = items['nutrata']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['nutrata'].map( i =>
        ( `../Items-nutricionais/nutrata/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/nutrata.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Nutrata;