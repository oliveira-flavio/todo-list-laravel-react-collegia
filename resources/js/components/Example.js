import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Example extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title:'',
            description: '',
            todos: [],
            message: ''
        }
    }
    componentDidMount() {
        this.getAll();
    }
    getAll() {
        Axios.get(`http://localhost/api/todoList`)
            .then(res => {
                this.setState({ todos: res.data,
                id:0,
                title:'',
                description: '' });
            })
            .catch(error => {
                this.setState({ 
                    message:  error.response.data.message });
            })
    }
    getOne(todo) {
        this.setState({
            id: todo.id,
            title: todo.title,
            description: todo.description
        });
    }

    delete(id){
        Axios.delete(`http://localhost/api/todo/${id}`)
        .then((res) => {
            this.getAll();
        })
    }

    submit(event,id) {
        event.preventDefault();
        if(this.state.id == 0) {
            Axios.post(`http://localhost/api/todo/store`, {
                title: this.state.title,
                description: this.state.description
            })
                .then(res => {
                    this.getAll();
                })
                .catch(error => {
                    this.setState({
                        message: error.response.data.message
                    });
                })
        } else {
            Axios.put(`http://localhost/api/todo/${id}`, {
                title: this.state.title,
                description: this.state.description
            })
                .then(res => {
                    this.getAll();
                })
                .catch(error => {
                    this.setState({
                        message: error.response.data.message
                    });
                })
        }
    }
    titleChange(event) {
        this.setState({
            title: event.target.value
        })
    }
    descriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }
    render(){

        let error = '';
        if(this.state.errorMessage) {
            error = <div className="alert alert-danger">{this.state.errorMessage}</div>
        }

        return (
            <div className="container">
                <div className="row">
                    {error}
                    <form onSubmit={(e) => this.submit(e, this.state.id)}>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">input</i>
                            
                            <input onChange={(e) => this.titleChange(e)} value={this.state.title} />
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">description</i>
                            <input onChange={(e) => this.descriptionChange(e)} value={this.state.description} />
                        </div>
                        <br/>
                        <div className="col s4">
                            <button type="submit" className="waves-effect waves-light btn">Save</button>
                        </div>
                    </form>
                    <table>
                        <tbody>
                        <tr>
                            <td>Task Title</td>
                            <td>Description</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                        {this.state.todos.map((todo) =>
                            <tr key={todo.id}>  
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button onClick={(e) => this.getOne(todo)} className="waves-effect waves-light btn">
                                    <i className="material-icons prefix">create</i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={(e) => this.delete(todo.id)} className="waves-effect waves-light btn">
                                    <i className="material-icons prefix">delete</i>
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
