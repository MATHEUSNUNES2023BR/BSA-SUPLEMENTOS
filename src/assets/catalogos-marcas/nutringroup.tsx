import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Nutringroup(){ 
    const nomes = items['nutringroup']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['nutringroup'].map( i =>
        ( `../Items-nutricionais/nutringroup/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/nutringroup.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Nutringroup;