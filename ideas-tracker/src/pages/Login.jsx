import { useState } from "react";

import { useUser } from "../lib/context/user";

export function Login(){

    const user = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (

        <section>
            <h1>Login</h1>
            <form >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />

                <div>

                    <button
                        className="button"
                        type="button"
                        onClick={()=> user.login(email, password)}
                    >Login</button>
                    <button
                        className="button"
                        type="button"
                        onClick={()=> user.register(email,password)}
                    >Register</button>
                </div>
            </form>
        </section>
    );
}