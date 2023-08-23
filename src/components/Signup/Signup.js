
import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7WocU_I9Nv-nxnExfOf99n9gkY4yBzddKJxAgpGrbZRN5ylDAw9I7s1jSJj0QBBmbpY&usqp=CAU")'
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '600px',
      padding: '20px',
      border: '2px solid black',
      borderRadius: '4px',
      backgroundColor:"white"
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
      
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border:"2px solid black"
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#00008B',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '90px',
      marginLeft: '30px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmit(true);

    // Check if the passwords match
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Clear any previous error messages
        navigate('/');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.inputContainer}>
          <label style={styles.label}>First Name:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import * as Components from './Components';
// import './Signup.css';

// import { useNavigate } from 'react-router-dom'; 


// function Signup() {
//   const [signIn, toggle] = React.useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mob, setMob] = useState("");
//   const [password, setPassword] = useState("");
//   const [selectedUserType, setSelectedUserType] = useState("");
//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
    
  
//     const user = {
//         custid:3,
//       custname: name,
//       custemail: email,
//       custphone: mob,
//       custpass: password,
//     };
   

//     try {
//       const response = await axios.post("http://localhost:8080/addcusto", user);
//       console.log(response.data);
//       // Handle success response (if needed)
//     } catch (error) {
//       console.error(error);
//       // Handle error (if needed)
//     }
//   };

//   return (
//     <Components.AlignCenter>
//       <Components.Container>
//         <Components.SignUpContainer signinIn={signIn}>
//           <Components.Form onSubmit={handleSignUp}>
//             <Components.Title>Create Account</Components.Title>
//             <Components.Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}  />
//             <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//             <Components.Input type='text' placeholder='Phone number' value={mob} onChange={(e) => setMob(e.target.value)} />

//             <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            
//             <br />
//             <Components.Button type="submit">Sign Up</Components.Button>
//           </Components.Form>
//         </Components.SignUpContainer>

//         <Components.SignInContainer signinIn={signIn}>
//           <Components.Form>
//             <Components.Title>Sign in</Components.Title>
//             <Components.Input type='email' placeholder='Email' />
//             <Components.Input type='password' placeholder='Password' />
//             <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
//             <Components.Button>Sign In</Components.Button>
//           </Components.Form>
//         </Components.SignInContainer>

//         <Components.OverlayContainer signinIn={signIn}>
//           <Components.Overlay signinIn={signIn}>
//             <Components.LeftOverlayPanel signinIn={signIn}>
//               <Components.Title>Welcome Back!</Components.Title>
//               <Components.Paragraph>
//                 To keep connected with us please login with your personal info
//               </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(true)}>
//                 Sign In
//               </Components.GhostButton>
//             </Components.LeftOverlayPanel>

//             <Components.RightOverlayPanel signinIn={signIn}>
//               <Components.Title>Hello, Friend!</Components.Title>
//               <Components.Paragraph>
//                 Enter Your personal details and start the journey with us
//               </Components.Paragraph>
//               <Components.GhostButton onClick={() => toggle(false)}>
//                 Sign Up
//               </Components.GhostButton>
//             </Components.RightOverlayPanel>
//           </Components.Overlay>
//         </Components.OverlayContainer>
//       </Components.Container>
//     </Components.AlignCenter>
//   );
// }

// export default Signup;
