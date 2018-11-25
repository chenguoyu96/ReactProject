import React, {Component} from 'react';
import {Form, Row, Col, Input, Button, Icon, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Condition extends Component {

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem label="用户名">
                                {getFieldDecorator("userName", {
                                    rules: [{
                                        required: false,
                                        message: '请输入用户名',
                                    }],
                                })(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem label="身份证号码">
                                {getFieldDecorator("idCard", {
                                    rules: [{
                                        required: false,
                                        message: '请输入用户身份证',
                                    }],
                                })(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem label="身份证号码">
                                {getFieldDecorator("idCard", {
                                    rules: [{
                                        required: false,
                                        message: '请输入用户身份证',
                                    }],
                                })(
                                    <Input placeholder="placeholder"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem label="性别">
                                {getFieldDecorator("userSex", {
                                    rules: [{
                                        required: false,
                                        message: '用户性别',
                                    }],
                                })(
                                    <Select>
                                        <Option value="1">男</Option>
                                        <Option value="2">女</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{marginLeft: 8}} onClick={this.handleReset}>重置</Button>
                        </Col>
                    </Row>

                </Form>
            </div>
        )
    }
}

export default Condition;