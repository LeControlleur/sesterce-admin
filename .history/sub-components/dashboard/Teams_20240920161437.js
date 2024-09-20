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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ActionsData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Image src={item.image} alt="" className="avatar-md avatar rounded-circle" />
                                        </div>
                                        <div className="ms-3 lh-1">
                                            <h5 className=" mb-1">{item.name}</h5>
                                            <p className="mb-0">{item.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">{item.role}</td>
                                <td className="align-middle">{item.lastActivity}</td>
                                <td className="align-middle">
                                    <ActionMenu />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default BotActions