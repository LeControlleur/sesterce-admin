'use client'
// import node module libraries
import { Col, Row, Container, Table } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import {} from 
import Signals from "data/Signals";

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Signals history" />

      {/* content */}
      <div className="py-6">
        <Row>
          {SignalsHistory()}
        </Row>
      </div>
    </Container>
  )
}

export default Profile