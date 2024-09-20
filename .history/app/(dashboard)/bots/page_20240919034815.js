'use client'
// import node module libraries
import { Row, Container, Card, Col, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// import widget as custom components
import { PageHeading, SignalCard } from 'widgets'

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Bots" />

      {/* content */}
      <div>
        <Row>
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
                <div className='justify-content-end'>
                  <ToggleButtonGroup type="checkbox" className="mb-2 me-1">
                    <ToggleButton id="tbg-check-1" value={1}>Toggle button</ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Profile