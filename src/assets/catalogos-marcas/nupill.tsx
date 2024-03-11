import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Nupill(){ 
    const nomes = items['nupill']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['nupill'].map( i =>
        ( `../Items-dermocosmeticos/nupill/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../SAÚDE-E-BELEZA/nupill.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Nupill;