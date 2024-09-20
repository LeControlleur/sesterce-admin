'use client'
// import node module libraries
import { Col, Row, Container, Table, FormControl } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import ActionsData from 'data/Actions'


const Actions = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Actions" />

      <Row className='justify-content-end'>
        <Col xxl={4} lg={4} md={8} xs={12}>
          <FormControl type="search" placeholder="Indice name" />
        </Col>
      </Row>

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
                <th scope="col" className='text-center'>State</th>
                <th scope="col" className='text-center'>Results</th>
              </tr>
            </thead>
            <tbody>
              {
                ActionsData.map((item, index) => {
                  const resultType = item.result > 0 ? "success" : "danger";
                  return(
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.indice}</td>
                    <td>{item.objective}</td>
                    <td>{item.stopLoss}</td>
                    <td>{item.date}</td>
                    <td className='text-center'>
                      <span className={`badge bg-${resultType} align-middle`}>{resultType == "success" ? "Success" : "Fail"}</span>
                    </td>
                    <td className='text-center'>
                      <span className="text-success">{item.result}</span>
                    </td>
                  </tr>
                )})
              }
            </tbody>
          </Table>
        </Row>
      </div>

    </Container>
  )
}

export default Actions