import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { AUTH } from '@/config/apiStrings';
import axios from 'axios';

import React, { useState } from 'react';
import { toast } from 'sonner';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const payload = {
        email: email,
        password: password,
      };
      const loginResponse = await axios.post(AUTH.LOGIN, payload);
      const responseData = loginResponse.data;
      toast.success("Login successful!",)
      setResponse(responseData);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="bg-teal-700 h-dvh w-dvw">
      <Card className="p-5" size="">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="user@test.com"
                type="text"
              ></Input>
              <FieldDescription>
                Please enter email provided by admin
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="User12345"
                type="password"
              ></Input>
              <FieldDescription>
                Please enter password provided by admin
              </FieldDescription>
            </Field>
          </FieldGroup>
          <div className="flex justify-between mt-10">
            <a className="text-gray-400 cursor-pointer">Forgot Password?</a>
            <div className="flex space-x-2">
              <Checkbox></Checkbox>
              <p>Remember me</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Log in</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
