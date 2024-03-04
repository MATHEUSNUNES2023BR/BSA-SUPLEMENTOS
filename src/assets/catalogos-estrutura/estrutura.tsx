import './estrutura.css'
function EstruturaCatalogos(props:{produtoNome: string; produtoCaminho: string;}){
    return(
        <div id="Catalogos" className="container my-2 ">
            <h1>BSA_SUPLEMENTOS</h1>
            <div className="col-sm-7 col-10 justify-content-center d-flex bg-white m-auto p-3 mt-3 rounded-4">
                <img src="../assets/images/Nutricional/Integral Medica.png" alt=""/>
            </div>
            <hr/>
            <div className="Catalogo col-12 justify-content-center d-flex mt-2">
                <h2>CATÁLOGO DE PRODUTOS</h2>
            </div>
            <input className="input form-control m-auto fs-3" type="text" placeholder="Pesquisa de Produtos"/>
            <div className="r-items row mt-4 mx-1 row-gap-4 justify-content-center my-2">
                <div className="col-lg-3 col-md-4 col-sm-5 col-12">
                    <div className="card">
                        <div className="card-header border-1 border-bottom  mb-2">
                            <h4 className="card-title text-center fw-bold">{props.produtoNome}</h4>
                        </div>
                        <div className="card-img justify-content-center d-flex">
                            <div className="row">
                                <div className="row d-flex justify-content-center m-auto">
                                    <div className="col-8 item-img">
                                        <img src={props.produtoCaminho} className="card-img-top"/>
                                    </div>
                                </div>
                                <div className="star col-8 d-flex justify-content-center m-auto mt-3">
                                    <img className="img-fluid" src="../assets/images/Items-nutricionais/star-svgrepo-com.svg" alt=""/>
                                    <img className="img-fluid" src="../assets/images/Items-nutricionais/star-svgrepo-com.svg" alt=""/>
                                    <img className="img-fluid" src="../assets/images/Items-nutricionais/star-svgrepo-com.svg" alt=""/>
                                    <img className="img-fluid" src="../assets/images/Items-nutricionais/star-svgrepo-com.svg" alt=""/>
                                    <img className="img-fluid" src="../assets/images/Items-nutricionais/star-svgrepo-com.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="card-body justify-content-center d-flex">
                            <div className="row">
                                <button className="btn btn-primary col-12">Veja Detalhes</button>
                                <button className="btn btn-success mt-4 col-8 m-auto"><a href="#" className="card-link nav-link">PEÇA AGORA</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EstruturaCatalogos;