import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Depiroll(){ 
    const nomes = items['depiroll']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['depiroll'].map( i =>
        ( `../Items-dermocosmeticos/depiroll/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='depiroll.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Depiroll;