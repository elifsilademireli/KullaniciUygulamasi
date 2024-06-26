import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class User extends Component{
    onDeleteClick(id,e){
        const {deleteUser} = this.props;
        deleteUser(id);
        
    }

    render(){
        const {id, name, email} = this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td><button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">DELETE</button></td>
            </tr>
        );
    }
}

export default User;