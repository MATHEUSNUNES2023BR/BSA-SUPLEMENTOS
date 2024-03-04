import './home.css'
function HomePage(){
    const nomes = ['PRODUTOS NUTRICIONAS', 'PRODUTOS DERMOCOSMÉTICOS']
    const tipo = [
        {divisao:{ nome: nomes, marca:[
        'absolut', 'athletica','body-food', 'bublee-pump', 'dux', 'integral-medica','iridium',
        'maxi-nutri', 'max-titanium', 'naturovos', 'nutra', 'nutringroup', 'probiotica', 'sanavita',
        'sanibras', 'unilife', 'vitabe']}},
        {divisao:{ nome: nomes, marca:['depimiel', 'depirol', 'gnano', 'granado logo',
        'herbissimo', 'labotrat', 'loreal', 'nupill', 'taiff']}}
    ]
    return(
        <div className="container mt-4">
            <div className="r1 row justify-content-center">
                <h1 className="col-12 text-center fw-bold">BSA_SUPLEMENTOS</h1>
            </div>
            { nomes.map((item: string, i:number) =>(
                <div className="rr row justify-content-center">
                    <h2 className="col-12 mb-4">{item}</h2>
                    <div className="row row-gap-3 nutricionais">
                    { tipo[i].divisao.marca.map(marcas =>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <img className="rounded-4" src={`../public/images/${item.split(' ').join('-')}/${marcas}.png`} alt=""/>
                        </div>
                    )}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default HomePage;