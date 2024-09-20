'use client'
// import node module libraries
import { Row, Container, Card } from 'react-bootstrap';

// import widget as custom components
import { PageHeading, SignalCard } from 'widgets'
import Signals from "data/Signals";

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Signals" />

      {/* content */}
      <div className="py-6">
        <Row>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="fw-bold">{info.asset}</h1>
                <div className={`icon-shape icon-md bg-light-${icon} text-${icon} rounded-2`}>
                  {
                    icon == "success" ?
                      <ArrowUpRight size={18} />
                      :
                      <ArrowDownRight size={18} />
                  }
                </div>
              </div>
              <div>
                <p>
                  <span className="fw-bold">Objective</span> : {info.objective}
                  <br />
                  <span className="fw-bold">Stop loss</span> : {info.stopLoss}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </div>

    </Container>
  )
}

export default Profile