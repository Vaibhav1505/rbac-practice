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
import AuthContext from '@/context/AuthContext';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Login() {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const payload = {
        email: email,
        password: password,
      };
      const loginResponse = await axios.post(AUTH.LOGIN, payload);
      const responseData = loginResponse.data;
      toast.success('Login successful!');
      authContext.login(responseData.user, responseData.accessToken);
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="bg-teal-900 h-dvh w-dvw px-72 py-40">
      <div className="flex justify-start items-end py-5 space-x-2">
        <p className="text-5xl font-extrabold text-white">RBAC </p>
        <p className="text-white font-semibold">Role based access Control</p>
      </div>
      <div className="">
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
          <CardFooter className="flex justify-end">
            <Button size="lg" onClick={handleSubmit}>
              Log in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
