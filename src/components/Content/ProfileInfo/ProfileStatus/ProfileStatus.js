import React from 'react'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            changingStatusMode: true,
            statusInputValue: this.props.status,
            status: this.props.status
        }
    }

    changingStatusModeFunc = ()=>{
        console.log(this.state.changingStatusMode)
         this.setState({changingStatusMode: !this.state.changingStatusMode})
        // console.log(this.state.changingStatusMode)

    }

    onStatusInputChange = (e) =>{
        
        let text = e.target.value
        this.setState({statusInputValue: text})
    }

    reWriteStatus = () =>{
        this.setState({status : this.state.statusInputValue,
            changingStatusMode: true
        })
    }

    render(){
        debugger
        return (this.state.changingStatusMode
            ?<div onClick = {this.changingStatusModeFunc}>{this.props.status}</div>
            :<div><input value ={this.state.statusInputValue} onChange = {this.onStatusInputChange}/><button onClick = {this.reWriteStatus}>Change status</button></div>)
    }
}
export default ProfileStatus