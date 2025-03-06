// ProfileScreen.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { GeneralLayout } from '@/components/layout/GeneralLayout';

const registrationSchema = z
  .object({
    email: z.string().email('Неправильний формат email'),
    password: z.string().min(6, 'Мінімальна довжина пароля 6 символів'),
    confirmPassword: z.string().min(6, 'Мінімальна довжина пароля 6 символів'),
    lastName: z.string().min(2, 'Прізвище має містити мінімум 2 символи'),
    firstName: z.string().min(2, 'Ім’я має містити мінімум 2 символи'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Паролі не співпадають',
  });

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function ProfileScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationFormData) => {
    // Handle registration logic here
    console.log('Registration Data:', data);
  };

  return (
    <GeneralLayout>
      <View style={styles.container}>
        {/* Title */}
        <ThemedText type="title" style={styles.title}>
          Реєстрація
        </ThemedText>

        {/* Form */}
        <View style={styles.form}>
          {/* Email */}
          <ThemedText style={styles.label}>Електронна пошта</ThemedText>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Електронна пошта"
            keyboardType="email-address"
            autoCapitalize="none"
            {...register('email')}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          {/* Password */}
          <ThemedText style={styles.label}>Пароль</ThemedText>
          <TextInput
            style={[styles.input, errors.password && styles.inputError]}
            placeholder="Пароль"
            secureTextEntry
            {...register('password')}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          {/* Confirm Password */}
          <ThemedText style={styles.label}>Пароль (ще раз)</ThemedText>
          <TextInput
            style={[styles.input, errors.confirmPassword && styles.inputError]}
            placeholder="Повторіть пароль"
            secureTextEntry
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>
              {errors.confirmPassword.message}
            </Text>
          )}

          {/* Last Name */}
          <ThemedText style={styles.label}>Прізвище</ThemedText>
          <TextInput
            style={[styles.input, errors.lastName && styles.inputError]}
            placeholder="Прізвище"
            {...register('lastName')}
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName.message}</Text>
          )}

          {/* First Name */}
          <ThemedText style={styles.label}>Ім'я</ThemedText>
          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            placeholder="Ім'я"
            {...register('firstName')}
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName.message}</Text>
          )}

          <Button title="Зареєструватися" color={"#2553cc"} onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </GeneralLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginVertical: 16,
    textAlign: 'center',
  },
  form: {
    marginTop: 8,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});
