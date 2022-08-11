import { Button, Col, Form, Input, Row } from 'antd'
import React, { useEffect } from 'react'
import { loginRequest } from '../../store/slice/auth.slice'
import { useAppDispatch, useAppSelector } from '../../store/storeHook'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/user'
export const Login = () => {
  const dispatch = useAppDispatch()
  const accessToken = useAppSelector((state) => state.auth.accessToken)
  const history = useNavigate()

  const onFinish = async (values: User) => {
    localStorage.setItem('email', values.email || '')
    dispatch(loginRequest(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)
      history('/')
    }
  }, [accessToken])

  return (
    <div className="mt-40">
      <h3 className="text-[#5CB85C] font-semibold text-xl text-center mb-8">
        Sign In
      </h3>
      <Form
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={16}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={16}>
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
          <Col span={16}>
            <Form.Item wrapperCol={{ offset: 16, span: 8 }}>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
