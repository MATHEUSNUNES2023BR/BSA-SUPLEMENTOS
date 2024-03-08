import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Bubleepump(){ 
    const nomes = items['bubleepump']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['bubleepump'].map( i =>
        ( `../Items-nutricionais/bubleepump/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRICIONAL/bubleepump.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Bubleepump;