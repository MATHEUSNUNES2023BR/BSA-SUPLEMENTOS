import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Sanavita(){ 
    const nomes = items['sanavita']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['sanavita'].map( i =>
        ( `../Items-nutricionais/sanavita/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='sanavita-medica.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Sanavita;