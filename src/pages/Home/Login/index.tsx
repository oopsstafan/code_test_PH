import { Card, Form, Input, Button, message } from 'antd'
//import withRouter to get props.history so that I can call push/goBack/etc to change page
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {store} from '../../../mobx/user_Info_Store'


function Login({history}: RouteComponentProps): JSX.Element {
    
    const onFinish = (value: {username: string; password: string}) => {
    
        //if the username and password are both 'admin', then go to '/info' path
        if (value.username === 'admin' && value.password === 'admin'){
            message.success('Login Successful!')
            //save username to mobax store
            store.saveUserInfo(value.username)
            //save username to localStorage
            localStorage.setItem('username', value.username)
            history.push('/info')
        }else{
            message.error('Login Failed!')
        }
    }
    const handleCancel = ()=>{
        //go back to last menu if cancel is selected
        history.goBack()
    }
    return (
        <Card >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    //make validation of username
                    rules={[
                        { required: true, message: 'Username cannot be blank!' },
                        { min: 4, message: "Your username is at least 4 characters" },
                        { max: 12, message: "You username is at most 12 characters" },
                        { pattern: /^\w+$/, message: "Your number can only have char, number or _ !" }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    //make validation of password
                    rules={[
                        { required: true, message: 'Password cannot be blank!' },
                        { min: 4, message: "Your username is at least 4 characters" },
                        { max: 12, message: "You username is at most 12 characters" },
                        { pattern: /^\w+$/, message: "Your number can only have char, number or _ !"}
                    ]}
                >
                    <Input.Password/>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>


                    <Button 
                        type="primary" 
                        style={{ marginLeft: '250px' }}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default withRouter(Login)
