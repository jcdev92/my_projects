import {useForm} from "../hooks/useForm";

export const Forms = () => {

    const {form, email, password, onChange} = useForm({
        email: 'test@tests.com',
        password: '15s4ab5hs'
    })

    return (
        <>
            <h3>Forms</h3>
            <input type="text" className="form-control" placeholder="email" value={email}
                   onChange={({target}) => onChange(target.value, "email")}/>
            <input type="text" className="form-control mt-2 mb-2" placeholder="password" value={password}
                   onChange={({target}) => onChange(target.value, 'password')}/>
            <code>
                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>
            </code>
        </>
    )
}