import React from "react";
import { withFirebase } from "../Firebase"
import "./userStyles.css"
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button,
    CardBody,
    Nav,
    NavItem,
    NavLink

} from "shards-react";
import {withRouter, Link} from "react-router-dom"


class UserAccountDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props,
            employee: {},
            isLoading: true,
            isEdit:false
        }
    }

    componentDidMount() {
        const employeeId = this.props.match.params.id
        const firebase = this.props.firebase
        const linkTo = this.props.history.push
        const employeeDocRef = firebase.getDocumentRef("employee", employeeId)
        firebase.getEmployeeById(employeeId).then(snapshot => {
            if(snapshot.empty) {
                linkTo("/tables")
            } else {
                const employee = snapshot.data()
                this.setState({employee, isLoading: false})
            }
        })
    }

    render() {
        const employee = this.state.employee
        return (
            <React.Fragment>
                {this.state.isLoading && <div>Loading...</div>}
                {!this.state.isLoading && this.state.isEdit && <div>Employee edit form</div>}
            {!this.state.isLoading && !this.state.isEdit && <div className="container py-4 my-2">
                <div className="row s">
                    <div className="col-md-4 pr-md-5">
                        <img className="w-100 rounded border" src="https://cdn.bootstrapsnippet.net/assets/image/dummy-avatar.jpg" styles={{"width": '10px', "height": "100px"}}/>
                        <div className="pt-4 mt-2">
                            <section className="mb-4 pb-1">
                                <h3 className="h6 font-weight-light text-secondary text-uppercase">Work Experiences</h3>
                                <div className="work-experience pt-2">
                                    <div className="work mb-4">
                                        <strong className="h5 d-block text-secondary font-weight-bold mb-1">Prodesign Inc</strong>
                                        <strong className="h6 d-block text-warning mb-1">Front End Developer</strong>
                                        <p className="text-secondary">Southern Street Floral Park, NY 11001</p>
                                    </div>
                                    <div className="work mb-4">
                                        <strong className="h5 d-block text-secondary font-weight-bold mb-1">Blue Tech</strong>
                                        <strong className="h6 d-block text-warning mb-1">Senior Programmer</strong>
                                        <p className="text-secondary">George Avenue Mobile, AL 36608</p>
                                    </div>
                                </div>
                            </section>
                            <section className="mb-5 mb-md-0">
                                <h3 className="h6 font-weight-light text-secondary text-uppercase">Skills</h3>
                                <div className="skills pt-1 row">
                                    <div className="col-4 mb-2">
                                        <div className="chart" data-percent="95" data-scale-color="#fff"><span>PHP</span></div>
                                    </div>
                                    <div className="col-4 mb-2">
                                        <div className="chart" data-percent="85" data-scale-color="#fff"><span>Ruby</span></div>
                                    </div>
                                    <div className="col-4 mb-2">
                                        <div className="chart" data-percent="90" data-scale-color="#fff"><span>Java</span></div>
                                    </div>
                                    <div className="col-4 mb-2">
                                        <div className="chart" data-percent="82" data-scale-color="#fff"><span>Python</span></div>
                                    </div>
                                    <div className="col-4 mb-2">
                                        <div className="chart" data-percent="70" data-scale-color="#fff"><span>C++</span></div>
                                    </div>
                                    <div className="col-4 mb-2">
                                        <div className="chart" data-percent="60" data-scale-color="#fff"><span>ASP</span></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex align-items-center">
                            <h2 className="font-weight-bold m-0">
                                {`${employee.firstName} ${employee.lastName}`}
                </h2>
                            <address className="m-0 pt-2 pl-0 pl-md-4 font-weight-light text-secondary">
                                <i className="fa fa-map-marker"></i>
                                Garden City, NY
                </address>
                        </div>
                        <p className="h5 text-primary mt-2 d-block font-weight-light">
                            {employee.title}
            </p>
        <p className="lead mt-4">{employee.details || <Link to="/edit">edit..</Link>}</p>

                        <section className="d-flex mt-5">
                            <button className="btn btn-light bg-transparent mr-3 mb-3">
                                <i className="fa fa-comments"></i>
                                Private Message
                </button>
                            <button className="btn btn-light bg-transparent mr-3 mb-3">
                                <i className="fa fa-warning"></i>
                                Edit
                </button>
                            <button className="btn btn-primary mb-3">
                                <i className="fa fa-check"></i>
                                Mark
                </button>
                        </section>
                        <section className="mt-4">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                        About
                        </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                        Reviews
                        </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                        Recent Projects
                        </a>
                                </li>
                            </ul>
                            <div className="tab-content py-4" id="myTabContent">
                                <div className="tab-pane py-3 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h6 className="text-uppercase font-weight-light text-secondary">
                                        Contact Information
                        </h6>
                                    <dl className="row mt-4 mb-4 pb-3">
                                        <dt className="col-sm-3">Phone</dt>
        <dd className="col-sm-9">{employee.workPhone}</dd>

                                        <dt className="col-sm-3">Home address</dt>
                                        <dd className="col-sm-9">
                                            <address className="mb-0">
                                                {/* 2983 Heavner Court<br />
                                                Garden City, NY 11530 */}
                                                {employee.street || <Link to="/edit">edit..</Link>}
                                </address>
                                        </dd>

                                        <dt className="col-sm-3">Email address</dt>
                                        <dd className="col-sm-9">
                                        <a href="mailto:aang.is.kefy@gmail.com">{employee.email}</a>
                                        </dd>
                                    </dl>

                                    <h6 className="text-uppercase font-weight-light text-secondary">
                                        Basic Information
                        </h6>
                                    <dl className="row mt-4 mb-4 pb-3">
                                        <dt className="col-sm-3">Birthday</dt>
                                        <dd className="col-sm-9">January 21, 1991</dd>

                                        <dt className="col-sm-3">Gender</dt>
                                        <dd className="col-sm-9">Male</dd>
                                    </dl>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>}
            </React.Fragment>
        )
    }
}

const userDetails = {}

export default withFirebase(withRouter(UserAccountDetails));
