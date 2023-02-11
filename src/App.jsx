import { useState } from 'react'
import { Container, Card, Row, Col } from "react-bootstrap"
import windArrow from "./assets/wind-arrow.png"
import rain from "./assets/rain.png"
import pressure from "./assets/pressure.png"
import humidity from "./assets/humidity.png"

function App() {

  return (
    <div className="App">
      <section className='vh-100 main-app d-flex justify-content-center align-items-center'>
        <Container id="app-container" className='border-0 rounded p-5 app-container d-flex justify-content-center align-items-center'>
        <Card className="bg-dark text-white border-0 rounded">
            <Card.Img src="https://picsum.photos/400/600" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='mb-5 text-center bg-secondary rounded'>Chicago</Card.Title>
              <div className='p-4 d-flex flex-column align-items-center'>
                <img src="https://picsum.photos/120" className='mb-4' alt="icon" style={{maxHeight: "120px", maxWidth: "120px"}} />
                <Card.Text className='mb-0'>Sunday &nbsp;| &nbsp; Feb 12</Card.Text>
                <Card.Text className='mb-0' style={{fontSize: "4rem", fontWeight: "600"}}>36&deg;</Card.Text>
                <Card.Text >Heavy rain</Card.Text>
                <hr className='w-100 bg-light text-light rounded m-0' style={{height: '2px', opacity: "1"}}/>
              </div>
              <Container>
                <Row xs={2}>
                  <Col className='d-flex align-items-center justify-content-start gap-2'>
                    <div className="icon-image-wrapper d-flex align-items-center justify-content-center" style={{height: "30px", width: "30px"}}>
                      <img src={windArrow} alt="wind-arrow" style={{maxHeight: "24px"}} />
                    </div>
                    <div className="today-details d-flex flex-column">
                      <p className='m-0'>10 mph</p>
                      <p className='m-0'>Wind</p>
                    </div>
                  </Col>
                  <Col className='d-flex align-items-center justify-content-start gap-2'>
                    <div className="icon-image-wrapper d-flex align-items-center justify-content-center" style={{height: "30px", width: "30px"}}>
                      <img src={rain} alt="rain-icon" style={{maxHeight: "24px"}} />
                    </div>
                    <div className="today-details d-flex flex-column">
                      <p className='m-0'>1.3 in</p>
                      <p className='m-0'>Rainfall</p>
                    </div>
                  </Col>
                </Row>
                <Row xs={2}>
                  <Col className='d-flex align-items-center justify-content-start gap-2'>
                    <div className="icon-image-wrapper d-flex align-items-center justify-content-center" style={{height: "30px", width: "30px"}}>
                        <img src={pressure} alt="pressure-icon" style={{maxHeight: "24px"}} />
                    </div>
                      <div className="today-details d-flex flex-column">
                        <p className='m-0'>1010 mbar</p>
                        <p className='m-0'>Pressure</p>
                      </div>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-start gap-2'>
                      <div className="icon-image-wrapper d-flex align-items-center justify-content-center" style={{height: "30px", width: "30px"}}>
                        <img src={humidity} alt="humidity-icon" style={{maxHeight: "24px"}} />
                      </div>
                      <div className="today-details d-flex flex-column">
                        <p className='m-0'>64%</p>
                        <p className='m-0'>Humidity</p>
                      </div>
                    </Col>
                </Row>
              </Container>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </section>
    </div>
  )
}

export default App
