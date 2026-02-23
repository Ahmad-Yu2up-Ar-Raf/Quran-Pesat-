import { SignInForm } from '@/components/ui/core/feature/auth/sign-in-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import * as React from 'react';
 

export default function SignInScreen() {
  return (
    <AuthLayout title="Selamat Datang!" description="Masuk untuk melanjutkan" formType="login">
      <SignInForm />
    </AuthLayout>
  );
}
