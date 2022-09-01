import React, { Component, useState } from 'react';
import { Container, Header, Content, Footer, Uploader, Input, Button } from 'rsuite';
import StepsComponent from './StepsComponent';
//import EmployeeService from '../services/EmployeeService'

class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.step = this.setStep();
        this.state = {
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
        console.log(event);
        this.setState({
            [event.target.name]: event
        });
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
                        <input size="sm" placeholder="pH" name="pH" type="text" value={this.state.pH} onChange={this.onInputchange} />
                        <input size="sm" placeholder="NO3" name="NO3" type="text" value={this.state.NO3} onChange={this.onInputchange} />
                        <input size="sm" placeholder="CiC" name="CiC" type="text" value={this.state.CiC} onChange={this.onInputchange} />
                        <input size="sm" placeholder="Nt" name="Nt" type="text" value={this.state.Nt} onChange={this.onInputchange} />
                        <input size="sm" placeholder="MO" name="MO" type="text" value={this.state.MO} onChange={this.onInputchange} />
                        <input size="sm" placeholder="P" name="P" type="text" value={this.state.P} onChange={this.onInputchange} />
                        <input size="sm" placeholder="Fe" name="Fe" type="text" value={this.state.Fe} onChange={this.onInputchange} />
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