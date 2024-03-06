import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Maxinutri(){ 
    const nomes = items['maxinutri']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['maxinutri'].map( i =>
        ( `../Items-nutricionais/maxinutri/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='maxinutri.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Maxinutri;