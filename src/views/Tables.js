import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { withFirebase } from "../components/Firebase"
import PageTitle from "../components/common/PageTitle";
import {withRouter} from "react-router-dom"

const defaultProps = {
  data: [
    {
      title: "On_board",
      heading: ["Name", "Surname", "address", "EmpId"],
      dataSets: [
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"]
      ]
    },
    {
      title: "On_board",
      heading: ["Name", "Surname", "address", "EmpId"],
      dataSets: [
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"],
        ["eer", "efaerf", "WEF", "ewfwe", "wefew"]
      ]
    }
  ]
}

class Tables extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  handleClick = (id) => {
    console.log(this.props)
    this.props.history.push("/employee/id")
  }

  UNSAFE_componentWillMount() {
    const firebase = this.props.firebase
    firebase.getEmployees().then(snapshot => {
      if (snapshot.empty) {
        alert("U have no employee")
      } else {
        var headings = ["name", "email", "supervisor", "title", "street"]
        var departments = {}
        snapshot.forEach(doc => {
          var employee_id = doc.id
          var { department, email, firstName, lastName, street, supervisor, title } = doc.data()

          console.log(doc.data())
          if(department !== "") {
            if (!(department in departments)) {
              departments[department] = {
                headings,
                infos: [[`${firstName} ${lastName}`, email, supervisor, title, street]],
                id: [employee_id]
              }
            } else {
              departments[department]["infos"].push([`${firstName} ${lastName}`, email, supervisor, title, street])
              departments[department]["id"].push(employee_id)
            }
          }
        });
        var data = []
        var dep_array = Object.keys(departments)
        console.log(dep_array, departments)
        for (var i = 0; i < dep_array.length; i++) {
          data.push({
            title: dep_array[i],
            headings,
            dataSets: departments[dep_array[i]]["infos"],
            id: departments[dep_array[i]]["id"]
          })
        }
        console.log(data)
        this.setState({ data })
      }
    }).catch(err => {
      console.log("Some error occoured", err.message)
    })
  }

  render() {
    const linkTo = this.props.history
    var tableHTML = this.state.data.map((doc, idx) => {
      console.log("Datasets.docvrvtrvtwtretybytbtyebytb", doc)
      return (
        <Row key={idx}>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">{doc.title}</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      {doc.headings.map((heading, indx) => {
                        return (
                          <th scope="col" className="border-0" key={indx}>
                            {heading}
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                  <tbody>
                      

                      {doc.dataSets.map((body, index) => {
                        return (
                          <tr onClick={() => linkTo.push(`/employee-details/${doc["id"][index]}`)} key={index+123}>
                            <td>{index+1}</td>
                            {
                              body.map((values, i) => {
                                return (
                                  <td key={i}>{values}</td>
                                )
                              })
                            }
                          </tr>
                        )                       
                      })}
                    
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    })
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Employees" subtitle="employees of company" className="text-sm-left" />
        </Row>
        {tableHTML}
        {/* Default Light Table */}
      </Container>
    )
  }
}

export default withFirebase(withRouter(Tables));
