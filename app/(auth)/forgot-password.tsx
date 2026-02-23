import { ForgotPasswordForm } from '@/components/ui/core/feature/auth/forgot-password-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function ForgotPasswordScreen() {
  return (
    <AuthLayout
      signInGoogleButton={false}
      title="Forgot your password?"
      description="Enter your email to reset your password">
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
