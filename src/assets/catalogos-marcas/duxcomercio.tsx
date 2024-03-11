import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Duxcomercio(){ 
    const nomes = items['duxcomercio']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['duxcomercio'].map( i =>
        ( `../Items-nutricionais/duxcomercio/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/duxcomercio.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Duxcomercio;