import React, { useState, useEffect } from 'react'
import { Segment, Form, Button, Label } from 'semantic-ui-react'

import { login, isAuthenticated } from '../../libs/Auth'

import './Login.css'

const Login = (props) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        isAdmin: false,
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        const isUserExist = () => {
            if (isAuthenticated()) {
                props.history.push('/')
            }
        }
        isUserExist()
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userInfo)
            .then((user) => {
                localStorage.setItem('currentUser', JSON.stringify(user))
                props.history.push('/')
            })
            .catch((error) => {
                setError(error)
            })
    }

    return (
        <div className="login">
            <Segment className="login__segment" padded="very" raised>
                <Form className="login__form" onSubmit={handleSubmit}>
                    {error && (
                        <Label className="login__error" color="red" basic>
                            {error}
                        </Label>
                    )}
                    <span className="login__emoji" role="img" aria-label="door">
                        🚪
                    </span>
                    <Form.Field className="login__field">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={userInfo.username}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field className="login__field">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={userInfo.password}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Button type="submit" color="brown">
                        Login
                    </Button>
                </Form>
            </Segment>
        </div>
    )
}

export default Login
