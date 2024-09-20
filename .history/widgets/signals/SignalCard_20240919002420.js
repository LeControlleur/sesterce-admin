import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import {
    Robot,
    CurrencyDollar,
    People,
    Bullseye
  } from 'react-bootstrap-icons';
  
const SignalCard = props => {
    const { info } = props;
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="fw-bold">{info.asset}</h1>
                    <div>
                        <h4 className="mb-0">{info.title}</h4>
                    </div>
                    <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                        {info.icon}
                    </div>
                </div>
                <div>
                    <h1 className="fw-bold">{info.stopLoss}</h1>
                    <h1 className="fw-bold">{info.stopLoss}</h1>
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