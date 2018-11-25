import {Button, Checkbox, Form, Icon, Input} from 'antd';
import React, {Component} from 'react';
import "./user.less";
import PropTypes from 'prop-types';
import {AxiosInstance as axios} from "axios";

const FormItem = Form.Item;

class NormalLoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/login', values).then((res) => {
                    this.context.router.history.push({pathname: '/',});
                }).catch((err) => {
                    console.log(err);
                });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem label="用户名">
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="请输入用户名"/>
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        或 <a>注册!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

NormalLoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;