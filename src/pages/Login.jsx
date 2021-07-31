import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import history from '../utils/history';
import '../css/login.css'
function Login(){
        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };
        return(
        <>
        <div className="container_login">
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input  className="login_input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                className="login_input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <div className="form_row_item">
                <Form.Item  name="remember" valuePropName="checked" noStyle>
                <Checkbox
                style={{color:"white"}}
                >Remember me</Checkbox>
                
                </Form.Item>
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
                </div>
            </Form.Item>
            <Form.Item className="login-button">
                <Button type="primary" htmlType="submit" className="login-form-button">
                LOGIN
                </Button>
            </Form.Item>
            <p style={{textAlign:"center", color:"white"}}
            >Not a member? <a href="#">Sign Up Now</a></p>
            </Form>
        </div>
    </>
    )
}
    // console.log("🚀 ~ file: login.jsx ~ line 61 ~ Login ~ history", history)
    
export default Login;