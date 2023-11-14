import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Phone from "../Components/images/phone.png"
import Mail from "../Components/images/mail.png"
import Address from "../Components/images/address.png"
import Form from "../Components/Form"
export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <div className='fw-normal fs-1 d-flex justify-content-center mt-3'>
          Контакты
        </div>
        <Card style={{display:"inline-block", border:"none"}}>
          <Row >
            <Col xs={2} md={1}>
              <img
                src={Phone}
                height="auto"
                width="100%"
              />
            </Col>
            <Col xs={10} md={3}>
              <Card.Body>
                <Card.Title>Телефон</Card.Title>
                <Card.Text>+7-(985)-639-99-65</Card.Text>
              </Card.Body>
            </Col>
            <Col xs={2} md={1}>
              <img
                src={Mail}
                height="auto"
                width="100%"
              />
            </Col>
            <Col xs={10} md={3}>
              <Card.Body>
                <Card.Title>Почта</Card.Title>
                <Card.Text>info@miolan.ru</Card.Text>
              </Card.Body>
            </Col>
            <Col xs={2} md={1}>
              <img
                src={Address}
                height="auto"
                width="100%"
              />
            </Col>
            <Col xs={10} md={3}>
              <Card.Body>
                <Card.Title>Адресс</Card.Title>
                <Card.Text>107076, г.Москва, ул. Краснобогатырская 90с1</Card.Text>
              </Card.Body>
            </Col>
            <Col xs={12} style={{height:"40vh", marginTop:"2%"}}>
              <div style={{ position: "relative", overflow: "hidden", height:"100%"}}>
                <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontsize:"12px", position:"absolute", top:"0px"}}>Москва</a>
                <a href="https://yandex.ru/maps/213/moscow/house/krasnobogatyrskaya_ulitsa_90s1/Z04YcQZgQUwPQFtvfXt4eHtkYQ==/?indoorLevel=1&ll=37.710899%2C55.799776&utm_medium=mapframe&utm_source=maps&z=16.69" style={{color:"#eee", fontsize:"12px",position:"absolute", top:"14px"}}>Краснобогатырская улица, 90с1 — Яндекс Карты</a>
              <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.710899%2C55.799776&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNzIxNjEyNDMwElDQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JrRgNCw0YHQvdC-0LHQvtCz0LDRgtGL0YDRgdC60LDRjyDRg9C70LjRhtCwLCA5MNGBMSIKDfXXFkIV-DJfQg%2C%2C&z=16.69" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe>
            </div>
          </Col>
        </Row>
      </Card>
      <div className='fw-normal d-flex justify-content-center fs-1 mt-3'>
          Связаться с нами
        </div>
        <Form />
      </Container >
    )
  }
}
