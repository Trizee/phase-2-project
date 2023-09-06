import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function ShopCard(){
    return(
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
                  <span class="mb-2">32GB</span>
                </div>
  
              <div className="d-flex flex-row">
                <MDBBtn color="danger" className="flex-fill ms-2">
                Add To Cart
                </MDBBtn>
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
                  <span class="mb-2">64GB</span>
                </div>

              <div className="d-flex flex-row">
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Add To Cart
                </MDBBtn>
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
                  <span class="mb-2">128GB</span>
                </div>
              <div className="d-flex flex-row">
                <MDBBtn color="danger" className="flex-fill ms-2">
                Add To Cart
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ShopCard