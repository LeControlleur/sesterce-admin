'use client'
// import node module libraries
import { Col, Row, Container, Table, FormCheck } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'


const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Actions" />

      {/* content */}
      <div className="py-6">
        <Row>
          <Table striped className="text-nowrap">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Indice</th>
                <th scope="col">Objective</th>
                <th scope="col">Stop loss</th>
                <th scope="col">Date</th>
                <th scope="col" className='text-center'>État</th>
                <th scope="col" className='text-center'>Resultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>EURUSD</td>
                <td>4.9876787678</td>
                <td>4.0676787678</td>
                <td>20/10/2024 16:08:976</td>
                <td className='text-center'>
                  <span className="badge bg-success align-middle">Active</span>
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