import { useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'show':
            return { showPassword: state.showPassword = true };
        case 'hide':
            return { showPassword: state.showPassword = false };
        default:
            throw new Error();
    }
}

export default function useLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] =useState(false);
    const [pageData] = useState({
        header: {
            text: "Blackboard"
        },
        title: {
            text: "Login Admin System"
        },
        labal: {
            email: {
                text: "E-mail or Username"
            },
            pass: {
                text: "Password"
            }
        },
        button: {
            login: {
                text: "Login"
            },
            regis: {
                text: "Register"
            }
        }
    });

    return { username, password, showPassword, pageData, setUsername, setPassword, setShowPassword }

}