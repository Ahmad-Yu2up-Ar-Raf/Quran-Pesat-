import { VerifyEmailForm } from '@/components/ui/core/feature/auth/verify-email-form';
import AuthLayout from '@/components/ui/core/layout/auth-layout';
import { ScrollView, View } from 'react-native';

export default function VerifyEmailScreen() {
  return (
    <AuthLayout
      signInGoogleButton={false}
      title="Verifikasi Email Anda"
      description="Masukkan kode yang telah kami kirim ke email Anda">
      <VerifyEmailForm />
    </AuthLayout>
  );
}
