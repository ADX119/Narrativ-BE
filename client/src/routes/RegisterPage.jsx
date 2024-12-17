import { SignUp } from '@clerk/clerk-react';
import React from 'react'

function RegisterPage() {
  return (
    <div className=" flex items-center justify-center">
      <SignUp signIpUrl="/login" />
    </div>
  );
}

export default RegisterPage