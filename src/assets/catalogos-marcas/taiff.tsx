import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Taiff(){ 
    const nomes = items['taiff']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['taiff'].map( i =>
        ( `../Items-dermocosmeticos/taiff/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../SAÚDE-E-BELEZA/taiff.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Taiff;