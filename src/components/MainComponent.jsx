import React, { Component, useState } from 'react';
import { Container, Header, Content, Footer, Uploader, Input, Button } from 'rsuite';
import StepsComponent from './StepsComponent';
//import EmployeeService from '../services/EmployeeService'

class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.step = this.setStep();
        this.samples = [];
        this.state = {
            sample: '',
            pH: '',
            NO3: '',
            CiC: '',
            Nt: '',
            MO: '',
            P: '',
            Fe: '',
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);

        /* this.state = {
                samples: []
        } */
        //this.addEmployee = this.addEmployee.bind(this);
        //this.editEmployee = this.editEmployee.bind(this);
        //this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    setStep() {
        return 0;
    }

    //https://www.pluralsight.com/guides/how-to-use-react-to-set-the-value-of-an-input
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    onSubmitForm() {
        console.log(this.state)
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
        /* const [value, setValue] = useState();
        const handleChange = (val) => {
            setValue(val);
        }; */
        /* const handleChange = (val) => {
            setValue(val);
        }; */
        
        return (
            <Container>
                <Header>
                    <StepsComponent currentStatus={this.step}></StepsComponent>
                </Header>
                <Content>
                    <section id="analisys">
                        <Uploader action="//jsonplaceholder.typicode.com/posts/"
                            shouldQueueUpdate={() => {
                                alert('The file is checked and allowed to be added to the queue');
                                return true;
                            }}
                            shouldUpload={() => {
                                alert('File check passed, run upload');
                                return true;
                            }}
                        />
                        <label>Nombre: <input
                            name="sample"
                            type="text"
                            value={this.state.sample}
                            onChange={this.onInputchange}
                        /></label>
                        <label>pH<input
                            name="pH"
                            type="number"
                            value={this.state.pH}
                            onChange={this.onInputchange}
                        /></label>
                        <label>NO3<input
                            name="NO3"
                            type="number"
                            value={this.state.NO3}
                            onChange={this.onInputchange}
                        /></label>
                        <label>CiC <input
                            name="CiC"
                            type="number"
                            value={this.state.CiC}
                            onChange={this.onInputchange}
                        /></label>
                        <label>Nt <input
                            name="Nt"
                            type="number"
                            value={this.state.Nt}
                            onChange={this.onInputchange}
                        /></label>
                        <label>MO <input
                            name="MO"
                            type="number"
                            value={this.state.MO}
                            onChange={this.onInputchange}
                        /></label>
                        <label>P <input
                            name="P"
                            type="number"
                            value={this.state.P}
                            onChange={this.onInputchange}
                        /></label>
                        <label>Fe<input
                            name="Fe"
                            type="number"
                            value={this.state.Fe}
                            onChange={this.onInputchange}
                        /></label>
                        
                        <Button appearance="primary" type="submit" onClick={this.onSubmitForm}>
                            Submit
                        </Button>
                    </section>
                </Content>
                <Footer>Footer</Footer>
            </Container>
        )
    }
}

export default MainComponent