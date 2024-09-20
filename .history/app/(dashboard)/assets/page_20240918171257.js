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

      <p>Seach bar</p>

      {/* content */}
      <div className="py-2">
        <Row>
          <Table striped className="text-nowrap">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Asset</th>
                <th scope="col">Active</th>
                <th scope="col" className='text-center'>Follow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>EURUSD</td>
                <td>4.9876787678</td>
                <td className='text-center'>
                  <FormCheck type="switch"/>
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