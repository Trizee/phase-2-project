import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
  } from "mdb-react-ui-kit";

function Shop({handleClickBeige,handleClickPurple,handleClickWhite}){





    return(
        <>
        <h2 style={{textAlign: 'center'}}>Shop Products</h2>
                    <MDBContainer fluid className="my-5">
                <MDBRow>
                    <MDBCol md="4" className="mb-4 mb-lg-0">
                    <MDBCard className="text-black">
                        <MDBCardImage
                        src="https://m.media-amazon.com/images/I/51EmI3Vdt1L._AC_SL1100_.jpg"
                        position="top"
                        alt="iPhone"
                        />
                        <MDBCardBody>
                        <div className="text-center mt-1">
                            <MDBCardTitle className="h4">Beige</MDBCardTitle>
                            <h6 className="text-primary mb-1 pb-3">$59.99</h6>
                        </div>
                        <div
                            className="p-3 mx-n3 mb-4"
                            style={{ backgroundColor: "#eff1f2" }}
                            >
                            <h5 className="mb-0">Capacity</h5>
                            </div>

                            <div className="d-flex flex-column mb-4 lead">
                            <span className="mb-2">32GB</span>
                            </div>
            
                        <div className="d-flex flex-row">
                            <div class="d-grid gap-2 col-10 mx-auto">
                            <button class="btn btn-primary" type="button" onClick={handleClickBeige}>Add To Cart</button>
                            </div>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    
                    <MDBCol md="4" className="mb-4 mb-lg-0">
                    <MDBCard className="text-black">
                        <MDBCardImage
                        src="https://m.media-amazon.com/images/I/5160txSdNOL._AC_SL1100_.jpg"
                        position="top"
                        alt="iPhone"
                        />
                        <MDBCardBody>
                        <div className="text-center mt-1">
                            <MDBCardTitle className="h4">White</MDBCardTitle>
                            <h6 className="text-primary mb-1 pb-3">$69.99</h6>
                        </div>
                        <div
                            className="p-3 mx-n3 mb-4"
                            style={{ backgroundColor: "#eff1f2" }}
                            >
                            <h5 className="mb-0">Capacity</h5>
                            </div>

                            <div className="d-flex flex-column mb-4 lead">
                            <span className="mb-2">64GB</span>
                            </div>

                        <div className="d-flex flex-row">
                        <div class="d-grid gap-2 col-10 mx-auto">
                            <button class="btn btn-primary" type="button" onClick={handleClickWhite}>Add To Cart</button>
                            </div>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="mb-4 mb-lg-0">
                    <MDBCard className="text-black">
                        <MDBCardImage
                        src="https://m.media-amazon.com/images/I/51lcOUZleqL._AC_SL1100_.jpg"
                        position="top"
                        alt="iPhone"
                        />
                        <MDBCardBody>
                        <div className="text-center mt-1">
                            <MDBCardTitle className="h4">Transparent Purple</MDBCardTitle>
                            <h6 className="text-primary mb-1 pb-3">$79.99</h6>
                        </div>
                        <div
                            className="p-3 mx-n3 mb-4"
                            style={{ backgroundColor: "#eff1f2" }}
                            >
                            <h5 className="mb-0">Capacity</h5>
                            </div>

                            <div className="d-flex flex-column mb-4 lead">
                            <span className="mb-2">128GB</span>
                            </div>
                            <div class="d-grid gap-2 col-10 mx-auto">
                            <button class="btn btn-primary" type="button" onClick={handleClickPurple}>Add To Cart</button>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
        </>
    )
}

export default Shop