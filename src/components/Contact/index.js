import React, { useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; // 3D model component

// ==================== Animation ====================
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ==================== Styled Components ====================

// Container for the full page
const PageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background: ${({ theme }) => theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(30, 30, 45, 0.5)'};
  box-shadow: ${({ theme }) => theme === 'light' ? '0 8px 24px rgba(0, 0, 0, 0.1)' : '0 8px 24px rgba(0, 0, 0, 0.5)'};
  color: ${({ theme }) => theme === 'light' ? '#2a003f' : '#fff'};
  animation: ${fadeIn} 0.8s ease forwards;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// Wrapper for the form section
const FormWrapper = styled.form`
  flex: 1;
  margin-right: 20px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

// Input field styles
const Field = styled.input`
  width: 100%;
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#9400D3' : '#7c3aed')};
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#2e2b3d')};
  color: inherit;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => (theme === 'light' ? '#d946ef' : '#c084fc')};
  }
`;

// Text area for user message
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#9400D3' : '#7c3aed')};
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#2e2b3d')};
  color: inherit;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => (theme === 'light' ? '#d946ef' : '#c084fc')};
  }
`;

// Submit button styles
const SubmitBtn = styled.button`
  background-color: #7c3aed;
  color: white;
  padding: 12px 24px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #6d28d9;
  }
`;

// Container for 3D model viewer
const ModelWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  margin-left: 40px;
  animation: ${fadeIn} 1s ease forwards;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 200px;
    margin-left: 0;
  }
`;

// ==================== Component Logic ====================

const ContactPage = () => {
  const [sent, setSent] = useState(false);         // To show confirmation after sending
  const [formErrors, setFormErrors] = useState({}); // To handle validation errors
  const { theme } = useContext(ThemeContext);      // Get theme from context

  // Basic form validation on submit
  const validateForm = (e) => {
    const form = e.target.form;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) errors.name = 'Name is required';
    if (!email || !emailRegex.test(email)) errors.email = 'Valid email required';
    if (!message) errors.message = 'Message cannot be empty';

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      e.preventDefault(); // Stop form if errors exist
    } else {
      setSent(true); // Show success state
    }
  };

  // ========== JSX ==========
  return (
    <PageWrapper theme={theme}>
      <FormWrapper
        method="POST"
        action="https://api.web3forms.com/submit"
        theme={theme}
      >
        {/* Hidden access key for Web3Forms API */}
        <input type="hidden" name="access_key" value="adfa6d07-31a5-48f1-9b5a-b33f1f2a9617" />

        <h2>Contact Me</h2>

        <Field theme={theme} name="name" placeholder="Your Name" required />
        {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}

        <Field theme={theme} name="email" placeholder="Your Email" required />
        {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}

        <TextArea theme={theme} name="message" placeholder="Your Message" required />
        {formErrors.message && <p style={{ color: 'red' }}>{formErrors.message}</p>}

        <SubmitBtn type="submit" onClick={validateForm}>
          {sent ? 'Sent!' : 'Send Message'}
        </SubmitBtn>
      </FormWrapper>

      {/* 3D model with OrbitControls */}
      <ModelWrapper theme={theme}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom={false} />
          <Model />
        </Canvas>
      </ModelWrapper>
    </PageWrapper>
  );
};

export default ContactPage;
