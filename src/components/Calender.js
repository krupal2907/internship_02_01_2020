import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from "shards-react";
import "./calender.css"



const CalenderLayout = () => (
    <Card className="vw-100" style={{"box-shadow": "none"}}>
        <CardHeader className="py-3 text-center">
            Date Picker
        </CardHeader>
        <CardBody>
        <Row >
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end ">Mon</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">Tue</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">Wed</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">Thu</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">Fri</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">Sat</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">Sun</div>
                </Col>
            </Row>
            <Row>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">1</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">2</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">3</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">4</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">5</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">6</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">7</div>
                </Col>
            </Row>
            <Row>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">1</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">2</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">3</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">4</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">5</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">6</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">7</div>
                </Col>
            </Row>
            <Row>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">1</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">2</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">3</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">4</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">5</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">6</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">7</div>
                </Col>
            </Row>
            <Row>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">1</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">2</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">3</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">4</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">5</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">6</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">7</div>
                </Col>
            </Row>
            <Row>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">1</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">2</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">3</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">4</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">5</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">6</div>
                </Col>
                <Col className="border-left border-bottom">
                    <div className="p-md-4 p-sm-1 py-4 d-flex justify-content-end">7</div>
                </Col>
            </Row>
        </CardBody>
        <hr />
            <ul className="list-group overflow-auto">
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
                <li className="list-group-item">Hello moto</li>
            </ul>
    </Card>
);

// DefaultLayout.propTypes = {

// };

// DefaultLayout.defaultProps = {

// };

export default CalenderLayout;
