import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Gnano(){ 
    const nomes = items['gnano']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['gnano'].map( i =>
        ( `../Items-dermocosmeticos/gnano/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='gnano.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Gnano;