'use client';
import React from 'react';
import { AuthForm } from '@components/AuthForm';


export default function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('submit');
        e.preventDefault();
    };

    return (
            <AuthForm formType={'register'} onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
                handleSubmit
            } } />
    );
}
