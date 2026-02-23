import { Button } from '@/components/ui/fragments/shadcn-ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Input } from '@/components/ui/fragments/shadcn-ui/input';
import { Label } from '@/components/ui/fragments/shadcn-ui/label';
import { Text } from '@/components/ui/fragments/shadcn-ui/text';
import { useSignIn } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import * as React from 'react';
import { View } from 'react-native';

export function ForgotPasswordForm() {
  const { email: emailParam = '' } = useLocalSearchParams<{ email?: string }>();
  const [email, setEmail] = React.useState(emailParam);
  const { signIn, isLoaded } = useSignIn();
  const [error, setError] = React.useState<{ email?: string; password?: string }>({});

  const onSubmit = async () => {
    if (!email) {
      setError({ email: 'Email is required' });
      return;
    }
    if (!isLoaded) {
      return;
    }

    try {
      await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      });

      router.push(`/(auth)/reset-password?email=${email}`);
    } catch (err) {
      // See https://go.clerk.com/mRUDrIe for more info on error handling
      if (err instanceof Error) {
        setError({ email: err.message });
        return;
      }
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      <View className="gap-6">
        <View className="gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            defaultValue={email}
            placeholder="m@example.com"
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
            onChangeText={setEmail}
            onSubmitEditing={onSubmit}
            returnKeyType="send"
          />
          {error.email ? (
            <Text className="text-sm font-medium text-destructive">{error.email}</Text>
          ) : null}
        </View>
        <Button className="w-full" onPress={onSubmit}>
          <Text>Reset your password</Text>
        </Button>
      </View>
    </>
  );
}
