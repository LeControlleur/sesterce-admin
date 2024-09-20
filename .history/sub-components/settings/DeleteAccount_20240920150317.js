// import node module libraries
import Link from 'next/link';
import { Col, Row, Card } from 'react-bootstrap';

const DeleteAccount = () => {
  return (
    <Row>
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Delete Account</h4>
          <p className="mb-0 fs-5 text-muted">Easily set up sesterce accounts</p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card className="mb-6">
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Danger Zone </h4>
            </div>
            <div>
              <p>Delete this user. Allow your username to become available to anyone.</p>
              <Link href="#" className="btn btn-danger">Delete Account</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default DeleteAccount