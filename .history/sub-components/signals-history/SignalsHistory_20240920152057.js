import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';


const SignalsHistory = (props) => {

    const { data } = props

    return (
        <Table striped className="text-nowrap">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Asset</th>
                    <th scope="col" className='text-center'>Order</th>
                    <th scope="col">Objective</th>
                    <th scope="col">Stop loss</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {Signals.map((item, index) => {
                    return (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.asset}</td>
                            <td className='text-center'>
                                <span className={`badge bg-${item.order == 'buy' ? 'success' : 'danger'} align-middle`}>{item.order}</span>
                            </td>
                            <td>{item.objective}</td>
                            <td>{item.stopLoss}</td>
                            <td>{item.date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

SignalsHistory.propTypes = {
	data: PropTypes.arrayOf(Object)
};

export default SignalsHistory