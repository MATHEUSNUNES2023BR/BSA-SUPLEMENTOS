import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Atlhetica(){ 
    const nomes = items['atlhetica']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['atlhetica'].map( i =>
        ( `../Items-nutricionais/atlhetica/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../PRODUTOS-NUTRICIONAIS/atlhetica.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Atlhetica;