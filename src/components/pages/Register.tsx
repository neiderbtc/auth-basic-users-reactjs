import React, { FormEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ValidateRegister } from '../../helpers/auth/validateRegister';
import { formDataToObject } from '../../helpers/formData/formdataToObject';
import { objectIsEmpty } from '../../helpers/objects/objectIsEmpty';
import validateRegexWithFormData from '../../helpers/validateInputs/validate-regex-with-form-data';
import useValidateFormAuth from '../../hooks/useValidateFormAuth';
import Button from '../atoms/Button';
import TitleFormAuth from '../atoms/TitleFormAuth';
import InputTextLabel from '../molecules/inputsLabel/InputTextLabel';
import ContainerFormAuth from '../organisms/containers/ContainerFormAuth';


const Register = () => {
    const { setValidate, validate, changeInput } = useValidateFormAuth();
    const [isRegister, setIsRegister] = useState<boolean>(false);

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

        const isValid = ValidateRegister({ email: data.email, password: data.password });
        if (isValid) {
            setIsRegister(true)
        } else {
            setValidate({ email: { error: 'email in use' } })
        }
    }

    return isRegister ? <Redirect to="/login" /> : (
        <ContainerFormAuth>
            <TitleFormAuth title="Register" />
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit} >
                <InputTextLabel
                    label="Name"
                    input={{
                        placeholder: 'Name',
                        name: 'name',
                        onChange: changeInput
                    }}
                    error={validate?.name?.error}
                />

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

                <Button text="Register" submit />

            </form>
            <div className="text-center pt-12 pb-12">
                <p>Do you already have an account?<Link to="/login" className="underline font-semibold text-indigo-900"> enter here.</Link></p>
            </div>
        </ContainerFormAuth>
    );
};

export default Register;