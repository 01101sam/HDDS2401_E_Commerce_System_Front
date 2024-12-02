import {createContext, ReactElement, useEffect, useReducer} from 'react';

// utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axios from 'src/utils/axios';
import {isValidToken, setSession} from './Jwt';

// ----------------------------------------------------------------------
export interface InitialStateType {
    isAuthenticated: boolean;
    isInitialized?: boolean;
    user?: any | null | undefined;
}

const initialState: InitialStateType = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers: any = {
    INITIALIZE: (state: InitialStateType, action: any) => {
        const {isAuthenticated, user} = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state: InitialStateType, action: any) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state: InitialStateType) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state: InitialStateType, action: any) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
};

const reducer = (state: InitialStateType, action: any) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext<any | null>({
    ...initialState,
    platform: 'JWT',
    signUp: () => Promise.resolve(),
    signIn: () => Promise.resolve(),
    resetPassword: () => Promise.resolve(),
    logOut: () => Promise.resolve(),
});

const unAuthorized = {
    type: 'INITIALIZE',
    payload: {
        isAuthenticated: false,
        user: null,
    },
};

function AuthProvider({children}: { children: ReactElement }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        initialize().catch(e => console.error(e));
    }, []);

    const initialize = async (type: string = "INITIALIZE") => {
        try {
            const accessToken = window.localStorage.getItem('accessToken');

            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);

                const response = await axios.get('/api/account/me');
                const user = response.data;

                dispatch({
                    type,
                    payload: {
                        isAuthenticated: true,
                        user: {
                            firstName: user.first_name,
                            lastName: user.last_name,
                            avatar: user.thumbnail_url,
                            email: user.email,
                            roles: user.roles,
                        },
                    },
                });
            } else {
                dispatch(unAuthorized);
            }
        } catch (err) {
            console.error(err);
            dispatch(unAuthorized);
        }
    };

    const signIn = async (email: string, password: string) => {
        const response = await axios.post('/api/auth/login', {email, password});
        const {access_token: accessToken} = response.data;

        setSession(accessToken);
        await initialize('LOGIN');
    };

    const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
        await axios.post('/api/auth/register', {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        });

        await signIn(email, password);
    };

    const resetPassword = async (email: string) => {
        return await axios.post('/api/auth/reset-password', {email});
    };

    const logOut = async () => {
        setSession(null);
        await initialize('LOGOUT');
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'jwt',
                signIn,
                logOut,
                resetPassword,
                signUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};
