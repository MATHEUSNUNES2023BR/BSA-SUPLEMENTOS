import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Loreal(){ 
    const nomes = items['loreal']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['loreal'].map( i =>
        ( `../Items-dermocosmeticos/loreal/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../SAÚDE-E-BELEZA/loreal.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Loreal;