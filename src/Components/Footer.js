import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='dark' data-bs-theme="dark" className='text-center text-lg-start text-muted'>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='pt-5'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Miolan
                            </h6>
                            <p>
                                Разработка программного обеспечения<br/>
                                Монтаж<br/>
                                Обслуживание
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Товары</h6>
                            <p>
                                <a >
                                    Сетевое Оборудование
                                </a>
                            </p>
                            <p>
                                <a  >
                                    Системы хранения данных
                                </a>
                            </p>
                            <p>
                                <a >
                                    Серверы
                                </a>
                            </p>
                            <p>
                                <a  >
                                    Источники бесперебойного питания
                                </a>
                            </p>
                            <p>
                                <a  >
                                    Компьютеры и ноутбуки
                                </a>
                            </p>
                            <p>
                                <a >
                                    Копировальная техника
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Ссылки</h6>
                            <p>
                                <a href='/' className='text-reset'>
                                    О компании
                                </a>
                            </p>
                            <p>
                                <a href='/products' className='text-reset'>
                                    Товары
                                </a>
                            </p>
                            <p>
                                <a href='/options' className='text-reset'>
                                    Наши услуги
                                </a>
                            </p>
                            <p>
                                <a href='/news' className='text-reset'>
                                    Новости
                                </a>
                            </p>
                            <p>
                                <a href='/contacts' className='text-reset'>
                                    Контакты
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Свяжитесь с нами</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                107076, г.Москва, ул. Краснобогатырская 90с1
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                info@miolan.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> +7-(985)-639-99-65
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: <span></span>
                <a className='text-reset fw-bold'>
                    Миолан
                </a>
            </div>
        </MDBFooter>
    );
}