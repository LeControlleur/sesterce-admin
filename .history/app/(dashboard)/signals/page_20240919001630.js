'use client'
// import node module libraries
import { Col, Row, Container, Table, FormCheck } from 'react-bootstrap';

// import widget as custom components
import { PageHeading, SignalCard } from 'widgets'

const data = [
  {
    asset: "EURUSD",
    date: "20/10/2024 16:08:976",
    stopLoss: "4.9876787678",
    takeProfit: "4.0676787678",
    order: "buy"
  },
  {
    asset: "GER30",
    date: "20/10/2024 16:08:976",
    takeProfit: "4.9876787678",
    stopLoss: "4.0676787678",
    order: "sell"
  }
]

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Signals" />

      {/* content */}
      <div className="py-6">
        <Row>
          {data.map((item, index) => {
            return (
              <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                <SignalCard info={item} />
              </Col>
            )
          })}
        </Row>
      </div>

    </Container>
  )
}

export default Profile