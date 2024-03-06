import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Vitale(){ 
    const nomes = items['vitale']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['vitale'].map( i =>
        ( `../Items-nutricionais/vitale/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='vitale.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Vitale;