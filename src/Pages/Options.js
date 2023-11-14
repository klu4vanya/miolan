import React, { Component } from 'react'
import { Container, TabContainer, Row, Col, Nav, TabPane, TabContent } from 'react-bootstrap'
import Server from "../Components/images/server.png"
import Laptop from "../Components/images/Laptop.jpg"
import Xerox from "../Components/images/xerox.jpg"
import CustomButton from '../Components/CustomButton'
export default class Options extends Component {
    render() {
        return (
            <Container>
                <TabContainer defaultActiveKey="first">
                    <Row>
                        <Col md={3} sm={4} className='mt-4'>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >
                                        Сетевое оборудование
                                    </Nav.Link>
                                    <Nav.Link eventKey="second">
                                        Системы хранения данных
                                    </Nav.Link>
                                    <Nav.Link eventKey="third">
                                        Серверы
                                    </Nav.Link>
                                    <Nav.Link eventKey="fourth">
                                        Источники бесперебойного питания
                                    </Nav.Link>
                                    <Nav.Link eventKey="fifth">
                                        Компьютеры и ноутбуки
                                    </Nav.Link>
                                    <Nav.Link eventKey="sixth">
                                        Копировальная техника
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={9} xs={8}>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Сетевое оборудование</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8} xs={12}>
                                            <img
                                                src='https://www.morepowertech.com/wp-content/uploads/2021/05/Network-Assessment-Blog-05112021.png'
                                                height="auto"
                                                width="100%"
                                                alt='Сетевое оборудование'
                                            />
                                        </Col>
                                        <Col md={4} xs={12}>
                                            <div className="fw-normal fs-3 m-4">Услуги
                                                <div className="fw-normal fs-5 m-0 ">
                                                    1. Проектирование<br />
                                                    2. Поставка<br />
                                                    3. Монтаж<br />
                                                    4. Обслуживание
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>

                                <TabPane eventKey="second">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Системы хранения данных </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8} xs={12}>
                                            <img
                                                src="https://www.secuteck.ru/hubfs/SecuteckRu/Projects/Background/shutterstock_366917669-e1481731655465.jpg"
                                                height="auto"
                                                width="100%"
                                                alt='Системы хранения данных '
                                            />
                                        </Col>
                                        <Col md={4} xs={12}>
                                            <div className="fw-normal fs-3 m-4">Услуги
                                                <div className="fw-normal fs-5 m-0 ">
                                                    1.	Подбор под требования заказчика<br />
                                                    2.	Модернизация существующей СХД<br />
                                                    3.	Поставка<br />
                                                    4.	Монтаж<br />
                                                    5.	Обслуживание<br />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Серверы </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8} xs={12}>
                                            <img
                                                src={Server}
                                                height="auto"
                                                width="100%"
                                                alt='Серверы'
                                            />
                                        </Col>
                                        <Col md={4} xs={12}>
                                            <div className="fw-normal fs-3 m-4">Услуги
                                                <div className="fw-normal fs-5 m-0 ">
                                                    1.	Подбор под требования заказчика<br />
                                                    2.	Поставка<br />
                                                    3.	Монтаж<br />
                                                    4.	Обслуживание<br />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Источники бесперебойного питания </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8} xs={12}>
                                            <img
                                                src='https://static.tildacdn.com/tild6633-3030-4232-a162-653562653233/Delta-UPS-Solutions.jpg'
                                                height="auto"
                                                width="100%"
                                                alt='Источники бесперебойного питания '
                                            />
                                        </Col>
                                        <Col md={4} xs={12}>
                                            <div className="fw-normal fs-3 m-4">Услуги
                                                <div className="fw-normal fs-5 m-0 ">
                                                    1.	Подбор технических решений<br />
                                                    2.	Поставка выбранного оборудования<br />
                                                    3.	Монтаж<br />
                                                    4.	Обслуживание<br />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="fifth">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Компьютеры и ноутбуки </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8} xs={12}>
                                            <img
                                                src={Laptop}
                                                height="auto"
                                                width="100%"
                                                alt='Компьютеры и ноутбуки '
                                            />
                                        </Col>
                                        <Col md={4} xs={12}>
                                            <div className="fw-normal fs-3 m-4">Услуги
                                                <div className="fw-normal fs-5 m-0 ">
                                                    1.	Подбор<br />
                                                    2.	поставка<br />
                                                    3.	обслуживание
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="sixth">
                                    <Row>
                                        <Col md={12} xs={12}>
                                            <div className='fw-normal fs-1 d-flex justify-content-center m-4'>Копировальная техника </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8} xs={12}>
                                            <img
                                                src={Xerox}
                                                height="auto"
                                                width="100%"
                                                alt='Копировальная техника'
                                            />
                                        </Col>
                                        <Col md={4} xs={12}>
                                            <div className="fw-normal fs-3 m-4">Услуги
                                                <div className="fw-normal fs-5 m-0 ">
                                                    1.	Подбор<br/>
                                                    2.	Поставка<br/>
                                                    3.	Снабжение расходными материалами<br/>
                                                    4.	Обслуживание
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container >
        )
    }
}
