// import node module libraries
import React from "react";
import Link from 'next/link';
import { Card, Table, Image } from 'react-bootstrap';

// import required data files
import ActionsData from "data/Actions";

const BotActions = () => {

    return (
        <Card className="h-100">
            <Card.Header className="bg-white py-4">
                <h4 className="mb-0">Bots actions </h4>
            </Card.Header>
            <Table responsive className="text-nowrap">
                <thead className="table-light">
                    <tr>
                        <th>Indice</th>
                        <th>State</th>
                        <th>Results</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ActionsData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="align-middle">
                                    <h5 className=" mb-1">{item.indice}</h5>
                                </td>
                                <td className="align-middle">
                                    <span className={`badge bg-${resultType} align-middle`}>{resultType == "success" ? "Success" : "Fail"}</span>
                                </td>
                                <td className="align-middle">{item.result}</td>
                                <td className="align-middle">{item.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default BotActions