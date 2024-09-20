import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import {
    ArrowUpRight,
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
                    <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
                <div>
                    <p>
                        <span className="fw-bold">Objective</span> : {info.objective}
                        <br/>
                        <span className="fw-bold">Stop loss</span> : {info.stopLoss}
                    </p>
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