import React, { Component } from 'react'
import { Container, Row, Col, Media, Card } from 'react-bootstrap'
import Block from "../Components/images/Block.jpg"
export default class News extends Component {
  render() {
    return (

      <Container>

        <Card className='m-4'>
          <Row>
            <Col md={4}>
              <img
                height="auto"
                width="100%"
                className='mr-3'
                src='https://hostsuki.abcdusercontent.com/hosting.kitchen/00/00/01/2015/07/25/078760317d.jpg'
                alt='Оборудование Huawei'
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <p>20 октября 2023 первые поставки оборудования Huawei по параллельному импорту</p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className='m-4'>
          <Row>
            <Col md={4}>
              <img
                height="auto"
                width="100%"
                className='mr-3'
                src='https://viva-telecom.org/images/BIG/CISCO/cisco-sf300-08.jpg'
                alt='Оборудование Huawei'
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <p>	1 июля 2023 Поставки оборудования Cisco по параллельному импорту </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className='m-4'>
          <Row>
            <Col md={4}>
              <img
                height="auto"
                width="100%"
                className='mr-3'
                src={Block}
                alt='Оборудование Huawei'
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <p>01 ноября 2023 Подписан контракт с ТД «ПЭШН» на поставку крупной партии телекоммуникационного оборудования <a href="https://mp-passion.ru/">Ссылка на статью</a></p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className='m-4'>
          <Row>
            <Col md={4}>
              <img
                height="auto"
                width="100%"
                className='mr-3'
                src="https://smilenaturalfoods.com/wp-content/uploads/2020/06/Contract-packaging-scaled.jpg"
                alt='Оборудование Huawei'
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <p>1 апреля 2023 Разработка дизайна и выпуск серии упаковок для отечественного телекоммуникационного оборудования </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>


    )
  }
}
