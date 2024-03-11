import { ChangeEvent } from 'react';
import './estrutura.css'
import items from '../catalogos-dados/dados-marcas-produtos';
function EstruturaCatalogos(props:{produto:{ nome:string[]; caminho:string[]}, logo:string}){
    const CapturaDados = (event: ChangeEvent<HTMLInputElement>) => {
        const valor:string = event.target.value
        const expressaoRegular = /[ /_:%]+/g;
        const val = valor.toLocaleLowerCase().replace(expressaoRegular, '-');
        const dados: HTMLCollectionOf<HTMLHeadingElement> = document.getElementsByTagName('h4');
    
        Array.from(dados).forEach((item: HTMLHeadingElement) => {
            const dadosText = item.innerText.replace(expressaoRegular, '-').toLocaleLowerCase();
            
            if (dadosText.includes(val)) {
                item.classList.add('show');
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        });
    
        const hide: HTMLDivElement[] = Array.from(document.querySelectorAll('.hide'));
        const show: HTMLDivElement[] = Array.from(document.querySelectorAll('.show'));
    
        hide.forEach((h: HTMLDivElement) => {
            const pai: HTMLDivElement | null = h.closest('.col-lg-3');
            if (pai instanceof HTMLDivElement) {
                pai.style.display = 'none';
            }
        });
    
        show.forEach((s: HTMLDivElement) => {
            const pai: HTMLDivElement | null = s.closest('.col-lg-3');
            if (pai instanceof HTMLDivElement ) {
                pai.style.display = 'block';
            }
        });
    };
    return(
        <div id="Catalogos" className="container my-2 ">
            <h1>BSA_SUPLEMENTOS</h1>
            <div className="col-sm-4 col-10 justify-content-center d-flex bg-white m-auto p-3 mt-3 rounded-4">
                <img src={props.logo} alt=""/>
            </div>
            <hr/>
            <div className="Catalogo col-12 justify-content-center d-flex mt-2">
                <h2>CATÁLOGO DE PRODUTOS</h2>
            </div>
            <input onInput={(i)=>{CapturaDados(i as ChangeEvent<HTMLInputElement>)}} className="input form-control m-auto fs-3" type="text" placeholder="Pesquisa de Produtos"/>
            <div className="r-items row mt-4 mx-1 row-gap-4 justify-content-center my-2">
                {props.produto.nome.map( (item, i) => (
                <div className="col-lg-3 col-md-4 col-sm-5 col-12">
                    <div className="card">
                        <div className="card-header border-1 border-bottom  mb-2">
                            <h4 id={'aa'+i} key={item} className="card-title text-center fw-bold">{item}</h4>
                        </div>
                        <div className="card-img justify-content-center d-flex">
                            <div className="row">
                                <div className="row d-flex justify-content-center m-auto">
                                    <div className="col-8 item-img">
                                        <img key={i} src={props.produto.caminho[i]} className="card-img-top"/>
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
                                <button className="btn btn-success mt-4 col-8 m-auto"><a href={'https://wa.me//+556281321737?text=Tenho%20interesse%20em%20comprar:%20'+ item} target='_blank' className="card-link nav-link">PEÇA AGORA</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default EstruturaCatalogos;