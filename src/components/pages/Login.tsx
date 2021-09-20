
import React, { FormEvent, FC, useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { verifyLogin } from '../../helpers/auth/verifyLogin';
import { formDataToObject } from '../../helpers/formData/formdataToObject';
import { objectIsEmpty } from '../../helpers/objects/objectIsEmpty';
import validateRegexWithFormData from '../../helpers/validateInputs/validate-regex-with-form-data';
import useValidateFormAuth from '../../hooks/useValidateFormAuth';
import Button from '../atoms/Button';
import InputTextLabel from '../molecules/inputsLabel/InputTextLabel';
import ContainerFormAuth from '../organisms/containers/ContainerFormAuth';


const Login: FC = () => {

    const { isLogin, setIsLogin } = useContext(AuthContext);
    const { setValidate, validate, changeInput } = useValidateFormAuth();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const formulary = new FormData(target);
        const validateFormData = validateRegexWithFormData(formulary);
        const notHaveErrors = objectIsEmpty(validateFormData);
        if (!notHaveErrors) {
            setValidate(validateFormData);
            return false;
        }
        const data = formDataToObject(formulary);

        const isValid = verifyLogin({ email: data.email, password: data.password });
     
        
        if (isValid) {
            setIsLogin(data);
        }else{
            setValidate({ general: {error: 'Email or password not valid'}})
        }

    }

    return isLogin ? <Redirect to="/" /> : (
        <ContainerFormAuth>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit} >

                <InputTextLabel
                    label="Email"
                    input={{
                        placeholder: 'example@gmail.com',
                        name: 'email',
                        onChange: changeInput
                    }}
                    error={validate?.email?.error}
                />

                <InputTextLabel
                    label="Password"
                    input={{
                        placeholder: '******',
                        name: 'password',
                        onChange: changeInput,
                        type: 'password'
                    }}
                    error={validate?.password?.error}
                />
                {
                    validate?.general?.error ? (<small className="text-red-500 mx-auto mt-5 font-bold">{validate?.general?.error} </small>) : ''
                }

                <Button text="Login" submit />

            </form>
            <div className="text-center pt-12 pb-12">
                <p>Don't have an account? <Link to="/register" className="underline text-indigo-900 font-semibold"> Register here.</Link></p>
            </div>
        </ContainerFormAuth>

    );
};

export default Login;