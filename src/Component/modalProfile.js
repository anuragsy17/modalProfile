import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import {fetchData, profileData, viewProfile} from '../Action/action'


class ModalProfile extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return (
            <>
                {
                <div className='user'>
                <div className='user_details'>
                    {
                        this.props.userData.map((val) => {
                            return (
                                <div onClick={this.props.viewProfile.bind(this, val.id)} className='main_div'>
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
            </div> }
            {this.props.showProfile ? <Modal data={this.props.userData}/> : null}
            </>  
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
        showProfile: state.showProfile,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (data) => dispatch(fetchData()),
        profileData: (data) => dispatch(profileData(data)),
        viewProfile: (id) => dispatch(viewProfile(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalProfile)
//export default ModalProfile;