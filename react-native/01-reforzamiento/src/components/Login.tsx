import {useEffect, useReducer} from "react";

interface AuthState {
    validating: boolean;
    token: string | null;
    username: string;
    name: string;
}

const initialState = {
    validating: true,
    token: null,
    username: '',
    name: '',
}

type LoginPayload = {
    token: string;
    username: string;
    name: string;
}

type AuthAction = { type: 'login', payload: LoginPayload } | { type: 'logout' }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'login':
            const {token, username, name} = action.payload;
            return {
                ...state,
                validating: false,
                token,
                username,
                name
            }
        case 'logout':
            return {
                ...state,
                validating: false,
                token: null,
                username: '',
                name: ''
            }
        default:
            return state
    }
}

export const Login = () => {

    const [{validating, token, name}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 500)
    }, [])

    const loginAction = () => {
        dispatch({
            type: 'login',
            payload: {
                token: '123456789',
                username: 'jose69',
                name: 'Jose'
            }
        })
    }

    const logoutAction = () => {
        dispatch({type: 'logout'})
    }

    if (validating) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validating...
                </div>
            </>
        )
    }


    return (
        <>
            <h3>Login</h3>

            {
                (token) ?
                    <div className="alert alert-success">autenticado como: {name}</div> :
                    <div className="alert alert-danger">No autenticado</div>
            }

            {
                (token) ?
                    <button className="btn btn-danger" onClick={logoutAction}>
                        Logout
                    </button>
                    :
                    <button className="btn btn-primary" onClick={loginAction}>
                        Login
                    </button>
            }
        </>
    )
}