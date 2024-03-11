import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Probiotica(){ 
    const nomes = items['probiotica']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['probiotica'].map( i =>
        ( `../Items-nutricionais/probiotica/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/probiotica.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Probiotica;