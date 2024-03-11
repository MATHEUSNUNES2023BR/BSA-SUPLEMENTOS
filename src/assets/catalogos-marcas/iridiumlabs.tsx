import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Iridiumlabs(){ 
    const nomes = items['iridiumlabs']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['iridiumlabs'].map( i =>
        ( `../Items-nutricionais/iridiumlabs/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/iridiumlabs.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Iridiumlabs;