import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import { FORGOT_PASSWORD } from 'variables/url';
import { LayoutPublic } from 'components/layout-public';
import HTMLContainer, { HTMLContent, HTMLTitle } from './auth.styles';

export const Auth: React.FC<{}> = () => {
  return (
    <HTMLContainer>
      <HTMLContent>
        <HTMLTitle>Авторизация</HTMLTitle>
        <Form layout="vertical" initialValues={{ remember: true }}>
          <Form.Item label="Login:" name="login" rules={[{ required: true, message: 'Please input your Login!' }]}>
            <Input placeholder="Example: admin@mail.com" />
          </Form.Item>
          <Form.Item
            label="Password:"
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password placeholder="* * * * * * * *" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href={FORGOT_PASSWORD}>
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </HTMLContent>
    </HTMLContainer>
  );
};

// @ts-ignore
Auth.layout = LayoutPublic;

export default Auth;
