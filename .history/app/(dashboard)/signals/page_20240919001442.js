'use client'
// import node module libraries
import { Col, Row, Container, Table, FormCheck } from 'react-bootstrap';

// import widget as custom components
import { PageHeading, SignalCard } from 'widgets'

const data = {info}

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Signals" />

      {/* content */}
      <div className="py-6">
        <Row>
          <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
            <SignalCard info={item} />
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Profile