'use client'
// import node module libraries
import { Col, Row, Container, Table, FormCheck } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'


const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Assets" />

      <Form.Control type="search" placeholder="Asset name" />

      {/* content */}
      <div className="py-2">
        <Row>
          <Table striped className="text-nowrap">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Asset</th>
                <th scope="col">Active</th>
                <th scope="col">Follow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>EURUSD</td>
                <td><span className="badge bg-success align-middle">Active</span></td>
                <td className='align-middle'>
                  <FormCheck type="switch" />
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>EURUSD</td>
                <td><span className="badge bg-success align-middle">Active</span></td>
                <td className='align-middle'>
                  <FormCheck type="switch" />
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>EURUSD</td>
                <td><span className="badge bg-danger align-middle">Inactive</span></td>
                <td className='align-middle'>
                  <FormCheck type="switch" />
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>EURUSD</td>
                <td><span className="badge bg-danger align-middle">Inactive</span></td>
                <td className='align-middle'>
                  <FormCheck type="switch" />
                </td>
              </tr>

            </tbody>
          </Table>
        </Row>
      </div>

    </Container>
  )
}

export default Profile