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
            todos: []
        }
    }
    componentDidMount() {
        this.getAll();
    }
    getAll() {
        Axios.get(`http://localhost:8000/api/todoList`)
            .then(res => {
                this.setState({ todos: res.data,
                id:0,
                title:'',
                description: '' });
            })
            .catch(function (error) {
                console.log(error);
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
        Axios.delete(`http://localhost:8000/api/todo/${id}`)
        .then((res) => {
            this.getAll();
        })
    }

    submit(event,id) {
        event.preventDefault();
        if(this.state.id == 0) {
            Axios.post('http://localhost:8000/api/todo/store', {
                title: this.state.title,
                description: this.state.description
            })
                .then(res => {
                    this.getAll();
                })
        } else {
            Axios.put(`http://localhost:8000/api/todo/${id}`, {
                title: this.state.title,
                description: this.state.description
            })
                .then(res => {
                    this.getAll();
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
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={(e) => this.submit(e, this.state.id)}>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">input</i>
                            <input onChange={(e) => this.titleChange(e)} value={this.state.title} />
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">content_paste</i>
                            <input onChange={(e) => this.descriptionChange(e)} value={this.state.description} />
                        </div>
                        <div className="col s4">
                            <button type="submit" className="waves-effect waves-light btn">Save</button>
                        </div>
                    </form>





                    <table>
                        <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                        </tbody>
                    </table>
                </div>"
            </div>
        );
    }
}
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
