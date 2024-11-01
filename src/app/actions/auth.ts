'use server'

import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
    // Validate the form data
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const remember = formData.get('remember') as string

    // Add artificial delay to simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Login attempt:', {
        email,
        password,
        remember: remember === 'on'
    })

    // TODO: Add your authentication logic here
    // Example:
    // try {
    //   await signIn({email, password})
    // } catch (error) {
    //   return {
    //     error: 'Invalid credentials'
    //   }
    // }

    // If successful, redirect to dashboard
    redirect('/dashboard')
}

export async function registerAction(formData: FormData) {
    // Validate the form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const terms = formData.get('terms') as string

    // Add artificial delay to simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Registration attempt:', {
        name,
        email,
        password,
        terms: terms === 'on'
    })

    // TODO: Add your registration logic here
    // Example:
    // try {
    //   await createUser({name, email, password})
    // } catch (error) {
    //   return {
    //     error: 'Registration failed'
    //   }
    // }

    // If successful, redirect to dashboard
    redirect('/dashboard')
}

// Optional: Add type safety for form data
export type LoginFormData = {
    email: string
    password: string
    remember?: boolean
}

export type RegisterFormData = {
    name: string
    email: string
    password: string
    terms: boolean
}

// Optional: Add error handling types
export type AuthError = {
    error: string
}