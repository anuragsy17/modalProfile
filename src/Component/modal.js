import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewProfile } from '../Action/action';

class Modal extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='modal_container'>
                <div className='modal'>
                <button className='close' onClick={this.props.viewProfile}>&times;</button>
                    <div className='profile_content'>
                        {
                           this.props.data.map((val)=>{
                            if(this.props.id == val.id){
                                return (
                                    <>
                                    <div className='profile_details'>
                                        <div>
                                            <h2>Profile</h2>
                                        </div>
                                    <h3>Name: {val.name}</h3>
                                    <h4>Current Company: <span>{val.company.name}</span></h4>
                                    <h3>Eamil: <span>{val.email}</span></h3>
                                    <h3>Phone: <span>{val.phone}</span></h3>
                                    <h3>Address:</h3>
                                    <h3>Suite: <span>{val.address.suite}</span></h3>
                                    <h3>Street: <span>{val.address.street}</span></h3>
                                    <h3>{val.address.city} ({val.address.zipcode})</h3>
                                    </div>
                                    </>
                                )
                            }
                           }) 
                        }
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        id: state.id
    }
}
const mapDispatchToProps = dispatch => {
    return {
        viewProfile: () => dispatch(viewProfile())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);