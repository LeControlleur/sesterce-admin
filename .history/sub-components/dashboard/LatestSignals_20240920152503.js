// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import { SignalsHistory } from "sub-components";
import Signals from "data/Signals";

const LatestSignals = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Latest signals</h4>
                    </Card.Header>
                    <SignalsHistory data={Signals} />
                    <Card.Footer className="bg-white text-center">
                        <Link href="/signals-history" className="link-primary">View All Projects</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default LatestSignals