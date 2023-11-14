import React, { Component } from 'react'
import { Container, TabContainer, Row, Col, Nav, TabPane, TabContent } from 'react-bootstrap'
export default class Home extends Component {
  render() {
    return (
      <Container>
        <TabContainer defaultActiveKey="first">
          <Row>
            <Col md={3} sm={4} className='mt-4'>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first" >
                    Гарантия
                  </Nav.Link>
                  <Nav.Link eventKey="second">
                    Проектирование
                  </Nav.Link>
                  <Nav.Link eventKey="third">
                    Монтаж
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9} xs={8}>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    <Col md={12} xs={12}>
                      <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Гарантия</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8} xs={12}>
                      <img
                        src='https://kod-urista.ru/wp-content/uploads/2022/08/rabotnik-s-rebenkom-invalidom-garantii-i-kompensacii.jpg'
                        height="auto"
                        width="100%"
                        alt='Гарантия'
                      />
                    </Col>
                    <Col md={4} xs={12}>
                      <div className="fw-normal fs-5 m-0 ">
                        1.	RMA<br />
                        2.	8*5 NBD<br />
                        3.	24*7 NBD<br />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane eventKey="second">
                  <Row>
                    <Col md={12} xs={12}>
                      <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Проектирование</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8} xs={12}>
                      <img
                        src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614858103_78-p-inzhenernii-fon-92.jpg'
                        height="auto"
                        width="100%"
                        alt='Проектирование'
                      />
                    </Col>
                    <Col md={4} xs={12}>
                      <div className="fw-normal fs-5 m-0 ">
                        1.	Локальные вычислительные сети<br />
                        2.	Электрические сети<br />
                        3.	Слаботочные системы<br />
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane eventKey="third">
                  <Row>
                    <Col md={12} xs={12}>
                      <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Монтаж</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8} xs={12}>
                      <img
                        src='https://cdn.elec.ru/i/8a/6c/8a6c64fdce1c61bfcada6029e3fc6a0582b6d69b.jpg'
                        height="auto"
                        width="100%"
                        alt='Монтаж'
                      />
                    </Col>
                    <Col md={4} xs={12}>
                      <div className="fw-normal fs-5 m-0 ">
                        1.	Сетевое оборудование<br/>
                        2.	Системы хранения данных<br/>
                        3.	Серверы<br/>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer >
      </Container >
    )
  }
}
