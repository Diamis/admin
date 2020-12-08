import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import { AUTH } from 'variables/url';
import { LayoutPublic } from 'components/layout-public';
import HTMLContainer, { HTMLContent, HTMLTitle, HTMLText } from './forgot-password.styles';

export const ForgotPassword: React.FC<{}> = () => {
  return (
    <HTMLContainer>
      <HTMLContent>
        <HTMLTitle>Забыли пароль?</HTMLTitle>
        <HTMLText>Пожалуйста, введите свой "логин", чтобы восстановить пароль</HTMLText>
        <Form layout="vertical" initialValues={{ remember: true }}>
          <Form.Item label="Login:" name="login" rules={[{ required: true, message: 'Please input your Login!' }]}>
            <Input placeholder="Enter you login" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Отправить
            </Button>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href={AUTH}>
              Go back to login
            </a>
          </Form.Item>
        </Form>
      </HTMLContent>
    </HTMLContainer>
  );
};

// @ts-ignore
ForgotPassword.layout = LayoutPublic;

export default ForgotPassword;
