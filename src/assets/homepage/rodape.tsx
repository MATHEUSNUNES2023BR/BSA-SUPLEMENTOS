import './rodape.css'
function Rodape(){
    return (
        <div className="container mt-5">
            <h2 className="fs-1 text-white justify-content-center d-flex">FALE CONOSCO</h2>
            <hr />
            <div className="row d-flex mx-2  mb-3">
                <div className="contato col-md-12 col-lg-4 d-flex flex-column align-items-start align-items-sm-start mt-2 mt-md-4 mt-lg-0">
                    <h3>Contato</h3>
                    <div className='borda' />
                    <div>
                        <h4>Telefone: (62) 98132-1737</h4>
                        <h4>E-mail: bsaforce5@gmail.com</h4>
                    </div>
                    
                </div>
                
                <div className="col-md-12 col-lg-4 logo d-flex flex-column align-items-start mt-5 mt-md-4 mt-lg-0">
                    <h3> BSA_Suplementos  </h3>
                    <div className='borda' />
                    <p> BSA Suplementos - Sua fonte confiável de suplementos, dermocosméticos e produtos de beleza. Melhore sua saúde e realce sua beleza conosco!
                    </p>
                </div>

                <div className="col-md-12 col-lg-4 redes d-flex flex-column align-items-center align-items-sm-center mt-5 mt-md-4 mt-lg-0">
                    <h3>Rede Sociais</h3>
                    <div className='borda' />
                    <div className="row mb-1">
                        <div className='whatsapp'> 
                            <a target='blank' href="https://wa.me/message/JQBOEZC7LHOAA1"><img className='img-fluid'  src="../public/rodape/whatsapp.svg" alt="" /> </a>
                        </div>
                        <div className='instagram'>
                            <a target='blank' ><img className='img-fluid' src="../public/rodape/instagram.svg" alt="" /></a> 
                        </div>
                    </div>
                    <h4 className='mt-4 text-white'>CPNJ: 52.923.602/0001-14</h4>
                </div>
              
            </div>
        </div>
    )
}
export default Rodape;