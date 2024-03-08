import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Sanibras(){ 
    const nomes = items['sanibras']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['sanibras'].map( i =>
        ( `../Items-nutricionais/sanibras/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRICIONAL/sanibras.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Sanibras;