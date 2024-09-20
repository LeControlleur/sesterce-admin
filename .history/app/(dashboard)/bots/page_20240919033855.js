'use client'
// import node module libraries
import { Row, Container, Card, Col } from 'react-bootstrap';

// import widget as custom components
import { PageHeading, SignalCard } from 'widgets'

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Signals" />

      {/* content */}
      <div className="py-6">
        <Row>
          <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={1}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1 className="fw-bold">TrendoBot</h1>
                </div>
                <div>
                  <p>
                    This bot is based on supertrend analysis
                  </p>
                </div>
                <div>
                  
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