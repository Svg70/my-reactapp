import React from 'react'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            changingStatusMode: true,
            status: this.props.status
        }
    }

     componentDidUpdate(prevProps, prevState) {
        
                if (prevProps.status !== this.props.status) {
                    this.setState({
                        status: this.props.status
                    });
                }
        
                console.log("componentDidUpdate")
           }
    changingStatusModeFunc = ()=>{
        
         this.setState({changingStatusMode: false})
        // console.log(this.state.changingStatusMode)

    }


    deactivateStatusModeFunc = ()=>{
        
        this.setState({changingStatusMode: true})
        this.props.updateStatus(this.state.status)

   }
    onStatusInputChange = (e) =>{
        
        let text = e.target.value
        this.setState({status: text})
    }

    // reWriteStatus = () =>{
    //     this.setState({
    //         changingStatusMode: true
    //     })
    // }

    render(){
 
        return (this.state.changingStatusMode
            ?<div onClick = {this.changingStatusModeFunc}>{this.props.status || "-------"}</div>
            :<div><input value ={this.state.status} onChange = {this.onStatusInputChange}/>
            <button onClick = {this.deactivateStatusModeFunc}>Change status</button></div>)
    }
}
export default ProfileStatus