import React, { Component } from 'react';
import Modal from './modal';

class ModalProfile extends Component {
    state = {
        data: [],
        viewProfile: false,
        id: ''
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({ ...this.state, data }))
    }
    viewProfile = (id) => {
        this.setState({ ...this.state, viewProfile: true, id: id })
        console.log(id);
    }
    close = ()=>{
        this.setState({ ...this.state, viewProfile: false, id: '' })
    }
    render() {
        return (
            <>
                {
                !this.state.viewProfile ? 
                <div className='user'>
                <div className='user_details'>
                    {
                        this.state.data.map((val) => {
                            return (
                                <div onClick={() => { this.viewProfile(val.id) }} className='main_div'>
                                    <div></div>
                                    <div className='details'>
                                        <h5>{val.name}</h5>
                                        <p>{val.email}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                :
                <div>
                    
                    <div className='user'>
                            <div className='user_details'>
                                {
                                    this.state.data.map((val) => {
                                        return (
                                            <div className='main_div'>
                                                <div></div>
                                                <div className='details'>
                                                    <h4>{val.name}</h4>
                                                    <p>{val.email}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Modal 
                        closePopup={this.close}
                        data={this.state.data}
                        id={this.state.id}
                        />
                </div>
                
                }
            </>
        );
    }
}

export default ModalProfile;