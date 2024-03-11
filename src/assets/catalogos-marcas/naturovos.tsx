import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Naturovos(){ 
    const nomes = items['naturovos']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['naturovos'].map( i =>
        ( `../Items-nutricionais/naturovos/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/naturovos.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Naturovos;