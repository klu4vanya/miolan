import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <div className='fw-normal fs-1 d-flex justify-content-center mt-3'>
          О компании
        </div>
        <p className='fw-normal fs-5 d-flex justify-content-center mt-3'>
       "Миолан" - Многопрофильное предприятие, образованное в 2018 году.<br/> Основными видами деятельности являются: разработка программного обеспечения, проектирование, монтаж и обслуживание слаботочных систем, оптовая поставка и монтаж телекоммуникационного оборудования. Ключевым отличием нашей компании является фокусное управление сложными проектами с привлечением внешних экспертных организаций.
        </p>
      </Container>
    )
  }
}
