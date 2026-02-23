import { SignUpForm } from '@/components/ui/core/feature/auth/sign-up-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function SignUpScreen() {
  return (
    <AuthLayout
 
      formType="register"
      title="Buat Akun Baru"
      description="Mari berkenalan dengan kami!">
      <SignUpForm />
    </AuthLayout>
  );
}
