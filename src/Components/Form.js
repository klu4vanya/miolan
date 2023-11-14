import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
const FeedbackForm = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const TOKEN = "6859562157:AAEPpZudT4YtUXSBoq99keUqfNmzc7Qq8vY";
    const CHAT_ID = "-4070817130";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let messagetg = `<b>заявка с сайта</b>\n`;
    messagetg += `<b>Отправитель: </b> ${name}\n`;
    messagetg += `<b>Почта: </b> ${email}\n`;
    messagetg += `<b>Сообщение: </b> ${message}`;
    if (name === '' && email === '' && message === '') {
      alert('Данные не указаны');
    } else {
      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: messagetg
      })
        .then((res) => {
          name = "";
          email = "";
          message = "";
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          console.log('end');
        })
      alert("Успешно отправлено!")
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Введите ваше сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button style={{ backgroundColor: "#FF5500", border: "none" }} type="submit">
          Отправить
        </Button>
      </Form>
    </Container>
  );
};
export default FeedbackForm;
