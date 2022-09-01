import React, { Component } from 'react';
import { Steps } from 'rsuite';
//import EmployeeService from '../services/EmployeeService'

class StepsComponent extends Component {
  constructor(props) {
    super(props)

    /* this.state = {
            samples: []
    } */
    //this.addEmployee = this.addEmployee.bind(this);
    //this.editEmployee = this.editEmployee.bind(this);
    //this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  /* deleteEmployee(id){
      EmployeeService.deleteEmployee(id).then( res => {
          this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
      });
  }
  viewEmployee(id){
      this.props.history.push(`/view-employee/${id}`);
  }
  editEmployee(id){
      this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount(){
      EmployeeService.getEmployees().then((res) => {
          this.setState({ employees: res.data});
      });
  }

  addEmployee(){
      this.props.history.push('/add-employee/_add');
  } */

  render() {
    return (
      <Steps current={this.props.currentStatus}>
        <Steps.Item title="Analisis" description="Carga de datos" />
        <Steps.Item title="Cultivo Objetivo" description="Carga de datos" />
        <Steps.Item title="Requerimientos" description="Ver resultados" />
        <Steps.Item title="Fuentes" description="Seleccion de fuentes" />
        <Steps.Item title="Presupuesto" description="Calculo economico" />
      </Steps>
    )
  }
}

export default StepsComponent