import './home.css'
import { Link } from 'react-router-dom'
import {nomes, tipo} from '../catalogos-dados/dados-home-marcas.tsx'
function HomePage(){
    return(
        <div className="container mt-4">
            <div className="r1 row justify-content-center">
                <h1 className="col-12 text-center fw-bold">BSA_SUPLEMENTOS</h1>
            </div>
            { nomes.map((item: string, i:number) =>(
                <div key={item} className="rr row justify-content-center">
                    <h2 className="col-12 mb-4">{item}</h2>
                    <div className="row row-gap-3 nutricionais">
                    { tipo[i].divisao.marca.map((marcas) =>
                        <div key={marcas} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <Link to={'catalogos/'+marcas}> <img className="rounded-4" src={`../${item.split(' ').join('-')}/${marcas}.png`} alt=""/> </Link>
                        </div>
                    )}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default HomePage;