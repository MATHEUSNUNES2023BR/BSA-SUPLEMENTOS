import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Labotrat(){ 
    const nomes = items['labotrat']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['labotrat'].map( i =>
        ( `../Items-dermocosmeticos/labotrat/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='labotrat.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Labotrat;