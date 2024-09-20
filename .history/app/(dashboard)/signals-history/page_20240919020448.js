'use client'
// import node module libraries
import { Col, Row, Container, Table } from 'react-bootstrap';

// import widget as custom components
import { PageHeading, SignalCard } from 'widgets'
import Signals from "data/Signals";

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Signals history" />

      {/* content */}
      <div className="py-6">
        <Row>
          <Table striped className="text-nowrap">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Asset</th>
                <th scope="col" className='text-center'>Order</th>
                <th scope="col">Objective</th>
                <th scope="col">Stop loss</th>
                <th scope="col" className='text-center'>Date</th>
              </tr>
            </thead>
            <tbody>
              {Signals.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.asset}</td>
                    <td className='text-center'>
                      <span className="badge bg-success align-middle">{item.order}</span>
                    </td>
                    <td>{item.objective}</td>
                    <td>{item.stopLoss}</td>
                    <td>{item.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Row>
      </div>
    </Container>
  )
}

export default Profile