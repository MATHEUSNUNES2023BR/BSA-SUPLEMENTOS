import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Absolut(){ 
    const nomes = items['absolut']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['absolut'].map( i =>
        ( `../Items-nutricionais/absolut/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='absolut.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Absolut;