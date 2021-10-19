import React from "react";
import {  Container, Row, Col, Card, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";

const Login = () => {
  const { signInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, error, isLogin, toggleLogin, handleResetPassword} = useAuth();
  const location = useLocation();
    
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);
    const handleLoginGoogle = () => {
            signInUsingGoogle()
            .then(result => {
            console.log(result.user);
            history.push(redirect_uri)
        })
    }

  return (
    <div id="login">
      <Container className="my-5 me-4">
      <Row>
          <Col sx={12} md={8}>
          <Card >
  <Card.Header> <h2>Please {isLogin ? 'Login' : 'Register'} </h2></Card.Header>
  <Card.Body>
     <form onSubmit={handleRegistration}>
     { !isLogin &&   <div className="row mb-3">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="text" className="form-control" id="name" required/>
    </div>
  </div>
  }
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange}type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="text-danger">{error}</div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
         Already Registered ?
        </label>
      </div>
    </div>
  </div>
  <button  type="submit" className="btn btn-primary">
      {isLogin ? 'Login' : 'Register'}
      </button>
      <button onClick={handleResetPassword} type="button" className="btn btn-primary btn-sm ms-4">Reset Password</button>
</form>
  </Card.Body>
   <Card.Footer className=""><p>------------Or---------------</p>
        <Button variant="success" onClick={handleLoginGoogle}>Google Sign In</Button></Card.Footer>
</Card>
 </Col>
      </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
