import Estrutura from '../catalogos-estrutura/estrutura';
import items from '../catalogos-dados/dados-marcas-produtos'
function Depimiel(){ 
    const nomes = items['depimiel']
    const expressaoRegular = /[ /_:%]+/g;
    const caminhos = items['depimiel'].map( i =>
        ( `../Items-dermocosmeticos/depimiel/${i.replace(expressaoRegular, '-')}.png` )
    )
    return(
        <Estrutura logo='depimiel.png' produto={{nome:nomes, caminho:caminhos}} />
    )}
export default Depimiel;