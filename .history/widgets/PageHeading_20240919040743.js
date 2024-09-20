// import node module libraries
import { Row, Col } from 'react-bootstrap';

const PageHeading = props => {
  const { heading, children } = props;
  return (
    <Row>
      <Col lg={6} md={6} xs={12}>
        {/* Page header */}
        <div className="border-bottom pb-4 mb-4 ">
          <h3 className="mb-0 fw-bold">{heading}</h3>
        </div>
      </Col>
      <Col lg={6} md={6} xs={12}>
      <div className='border-bottom'>
        {children}
      </div>
      </Col>
    </Row>
  )
}

export default PageHeading