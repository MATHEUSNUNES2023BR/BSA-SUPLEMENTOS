import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Vitabe(){ 
    const nomes = items['vitabe']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['vitabe'].map( i =>
        ( `../Items-nutricionais/vitabe/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/vitabe.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Vitabe;