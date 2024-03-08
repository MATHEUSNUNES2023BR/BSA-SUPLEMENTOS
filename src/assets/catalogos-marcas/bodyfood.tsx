import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Bodyfood(){ 
    const nomes = items['bodyfood']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['bodyfood'].map( i =>
        ( `../Items-nutricionais/bodyfood/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRICIONAL/bodyfood.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Bodyfood;