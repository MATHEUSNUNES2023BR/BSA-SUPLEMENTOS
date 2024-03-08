import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Granado(){ 
    const nomes = items['granado']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['granado'].map( i =>
        ( `../Items-dermocosmeticos/granado/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO-E-SAÚDE/granado.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Granado;