import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const SignalCard = props => {
    // const { info } = props;
    let info = {
        asset: "EURUSD",
        date: "20/10/2024 16:08:976",
        stopLoss: "4.9876787678",
        takeProfit: ""
    }
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="fw-bold">{info.value}</h1>
                    <div>
                        <h4 className="mb-0">{info.title}</h4>
                    </div>
                    <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                        {info.icon}
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