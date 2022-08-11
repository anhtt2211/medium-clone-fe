import {
  Button,
  Col,
  Form,
  Input, Row
} from 'antd'
import React, { useEffect, useState } from 'react'
import { editUserRequest } from '../../store/slice/user.slice'
import { useAppDispatch, useAppSelector } from '../../store/storeHook'

export const Setting = () => {
  const [form] = Form.useForm()
  const [selectedFile, setSelectedFile] = useState(null)
  const dispatch = useAppDispatch()
  const { user, loading } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      const defaultValue = {
        ...user,
        // file: user.avatar
      }
      form.setFieldsValue(defaultValue)
    }
  }, [user])

  const handleSubmit = (data) => {
    const email = localStorage.getItem('email') || ''
    const payload = {
      ...data,
      email,
      file: selectedFile,
    }
    dispatch(editUserRequest(payload))
  }

  return (
    <div className='mt-20'>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[52,52]}>
          <Col span={16}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Full name"
              name="name"
              rules={[
                { required: true, message: 'Please input your full name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
          </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="" name="file">
              <input
                type="file"
                onChange={async (event) => {
                  const file = event.target.files[0]
                  setSelectedFile(file)
                }}
              />
              <img src={user.avatar} alt="" width={240} height={180} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
