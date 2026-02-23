import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/fragments/shadcn-ui/card';
import { Link } from 'expo-router';
import { SocialConnections } from '../feature/auth/social-connections';
import { Separator } from '../../fragments/shadcn-ui/separator';

import { Text } from '../../fragments/shadcn-ui/text';
import { Image, ScrollView, View } from 'react-native';
import LogoApp from '../../fragments/svg/logo-app';

type AuthLayoutProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  quote?: string;

  loading?: boolean;
  className?: string;
  numberOfIterations?: number;
  formType?: 'login' | 'register' | undefined; // ✅ Allow undefined
  signInGoogleButton?: boolean;
};
const AuthLayout = ({
  formType,
  numberOfIterations,
  className,

  loading = false,
  signInGoogleButton = true,
  title = `Welcome Back!`,
  quote = `Your ideas are not just talk — make them happen.`,
  description = `The journey is about to begin`,
  ...props
}: AuthLayoutProps) => {
  const formTypeLabel = formType == 'register' ? 'Login' : 'Register';
  const formTypeLink = formType == 'register' ? '/(auth)/sign-in' : '/(auth)/sign-up';
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      contentContainerClassName="sm:flex-1 items-center justify-center    h-full  sm:py-4 sm:p-6    content-center  bg-card">
      <Card className="relative m-auto flex h-full w-full max-w-sm content-center justify-center gap-6 border-0 bg-card p-7 shadow-none sm:border-border">
        <CardHeader className="relative flex w-full flex-col content-center items-center justify-center gap-7 p-0">
          <View className="size-fit scale-150">
            <LogoApp className="relative m-auto size-full overflow-visible" />
          </View>
          <View>
            <CardTitle className="font-cinzel_bold mb-0.5 text-center text-2xl sm:text-left">
              {title}
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground sm:text-left">
              {description}
            </CardDescription>
          </View>
        </CardHeader>
        <CardContent className="mb-0 gap-7 p-0">
          <View className="gap-4">{props.children}</View>
        </CardContent>
        {signInGoogleButton && (
          <>
            <CardFooter className="relative mt-0 flex w-full flex-col gap-7 overflow-hidden p-0">
              <View className="flex-row items-center">
                <Separator className="flex-1" />
                <Text className="px-4 text-sm text-muted-foreground">atau lanjutkan dengan</Text>
                <Separator className="flex-1" />
              </View>
              <SocialConnections />
              {formType && (
                <Text className="mt-2 text-center text-sm text-muted-foreground">
                  {formType == 'register' ? ` alredy have an account? ` : 'don`t have an account? '}
                  <Link href={formTypeLink} className="text-primary underline underline-offset-4">
                    {formTypeLabel}
                  </Link>
                </Text>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </ScrollView>
  );
};

export default AuthLayout;
