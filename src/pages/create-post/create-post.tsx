import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { createPostRequest } from '../../store/slice/post.slice'
import { useAppDispatch, useAppSelector } from '../../store/storeHook'
import { Post } from '../../types/post'

export const CreatePost = () => {
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector((state) => state.post)
  const [form] = Form.useForm()

  const handleSubmit = (data: Post) => {
    dispatch(createPostRequest(data))

    if (!loading) {
      form.resetFields()
    }
  }
  return (
    <div className="mt-20">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input title!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input description!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Content"
              name="content"
              rules={[{ required: true, message: 'Please input content!' }]}
            >
              <Input.TextArea rows={8} />
            </Form.Item>
          </Col>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  )
}
