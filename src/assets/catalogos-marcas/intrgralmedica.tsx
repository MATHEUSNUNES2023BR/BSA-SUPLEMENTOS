import Estrutura from '../catalogos-estrutura/estrutura';
function CatalogoIntegralMedica(){
    const caminho = '../public/images/Items-nutricionais/INT-CRISP-BAR-DOCE-COCO-C_12-V2.png'
    return(
        <Estrutura produtoNome='Doce de Coco' produtoCaminho={caminho} />
    )
}
export default CatalogoIntegralMedica;