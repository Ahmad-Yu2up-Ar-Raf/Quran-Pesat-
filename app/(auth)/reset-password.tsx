import { ResetPasswordForm } from '@/components/ui/core/feature/auth/reset-password-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

export default function ResetPasswordScreen() {
  return (
    <AuthLayout
      signInGoogleButton={false}
      title="Reset your password"
      className="mb-4"
      description="Enter your new password to reset it">
      <ResetPasswordForm />
    </AuthLayout>
  );
}
