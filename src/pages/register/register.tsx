import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerRequest } from '../../store/slice/auth.slice'
import { useAppDispatch } from '../../store/storeHook'
import { User } from '../../types/user'

interface FormData {
  email: string
  password: string
  passwordConfirm: string
}

export const Register = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = (data: FormData) => {
    dispatch(registerRequest(data))

    form.resetFields()
    navigate('/login')
  }

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Confirm password"
              name="passwordConfirm"
              rules={[
                { required: true, message: 'Please input confirm password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
