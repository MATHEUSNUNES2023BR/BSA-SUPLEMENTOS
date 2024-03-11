import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Unilife(){ 
    const nomes = items['unilife']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['unilife'].map( i =>
        ( `../Items-nutricionais/unilife/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='../NUTRIÇÃO/unilife.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Unilife;