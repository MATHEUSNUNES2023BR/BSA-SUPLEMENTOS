import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Maxtitanium(){ 
    const nomes = items['maxtitanium']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['maxtitanium'].map( i =>
        ( `../Items-nutricionais/maxtitanium/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/maxtitanium.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Maxtitanium;