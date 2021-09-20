import  { ChangeEvent, useState } from 'react';
import validateRegex from '../helpers/validateInputs/validate-regex';

type Validate = {
    email?: { value?: string; error: string };
    name?: { value: string; error: string };
    password?: { value: string; error: string };
    general?: { value?: string; error: string };
}


const useValidateFormAuth = () => {
    const [validate, setValidate] = useState<Validate>();
    const changeInput = (e: ChangeEvent) => {
        const resultValidate: {} = validateRegex(e);
        setValidate({ ...validate, ...resultValidate })
    }
    return { changeInput, validate, setValidate };
};

export default useValidateFormAuth;