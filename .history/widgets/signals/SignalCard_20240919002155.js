import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const SignalCard = props => {
    const { info } = props;
    return (
        <Card className='bg-success'>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="fw-bold">{info.asset}</h1>
                    <div>
                        <h4 className="mb-0">{info.title}</h4>
                    </div>
                </div>
                <div>
                    <h1 className="fw-bold">{info.value}</h1>
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p>
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
SignalCard.propTypes = {
    info: PropTypes.any.isRequired
};

export default SignalCard