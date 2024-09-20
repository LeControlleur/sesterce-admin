'use client'
// import node module libraries
import { Row, Container, Card, Col, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

// import widget as custom components
import { PageHeading } from 'widgets'

const Profile = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Bots" />

      {/* content */}
      <div>
        <Row className='justify-content-end'>
          <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={1}>
            <Button variant="danger" size="lg" className="me-1" >Stop all bots</Button>
          </Col>
        </Row>
        <Row>
          <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={1}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1 className="fw-bold">TrendoBot</h1>
                </div>
                <div>
                  <p>
                    This bot is based on supertrend analysis looking for the following conditions:
                    <ul>
                      <li>
                        Same supertrend on 1h and 4h candles
                      </li>
                      <li>
                        30m candle same as common supertrend
                      </li>
                      <li>
                        1m candle cross Bollinger band
                      </li>
                    </ul>
                  </p>
                </div>
                <div className='mt-6 d-flex justify-content-end'>
                  <Button variant="danger" size="lg" className="me-1" onClick={handleShow}>Stop</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          Do you really want to stop this bot ?
        </Modal.Header>
        <Modal.Body>Do you really want to stop this bot ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Stop
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Profile