import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Herbissimo(){ 
    const nomes = items['herbissimo']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['herbissimo'].map( i =>
        ( `../Items-dermocosmeticos/herbissimo/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO-E-SAÚDE/herbissimo.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Herbissimo;