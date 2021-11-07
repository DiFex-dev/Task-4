import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { Button, Toast, ToastContainer} from 'react-bootstrap';


export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      isLoggedin: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    
  }
  
  responseFacebook=(response)=>{
    console.log(response);
    this.setState({
      isLoggedin: true
    })
  }
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj)
    this.setState({
      isLoggedin: true
    })
  }
  render() {
    return (
      this.state.isLoggedin ?   <div className="mt-5">
        <ToastContainer>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <button className="me-auto" onClick={() => {window.location.reload(false); console.log('Button clicked');}} >Bro!</button>
      <small className="text-muted">just now</small>
    </Toast.Header>
    <Toast.Body>Send by name</Toast.Body>
  </Toast>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <button className="me-auto" onClick={() => window.location.reload(false)}>Sis!</button>
      <small className="text-muted">2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>Send by name </Toast.Body>
  </Toast>
</ToastContainer>
       <Button variant="primary" size="lg" onClick={(event) => console.log(event)}>
        Bro!
      </Button>{' '}
       <Button variant="secondary" size="lg" onClick={(event) => console.log(event)}>
        Sis!
      </Button>
    </div>:
      (<div>
        <FacebookLogin
    appId="414275746769759"
    autoLoad={false}
    fields="name,email,picture"
    callback={this.responseFacebook} />
    <GoogleLogin
      clientId='502425545262-66u8teafgmpnm658bngnq3cg707i7q5p.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
      </div>)
    )
  }
}
