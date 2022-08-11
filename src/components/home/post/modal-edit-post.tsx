import { Button, Col, Form, Input, Modal, Row } from 'antd'
import React, { MouseEventHandler, useEffect } from 'react'
import { Post } from '../../../types/post'

interface Props {
  post: Post
  visible: boolean
  handleCancel: MouseEventHandler
  handleSubmit: Function
}

export const ModalEditPost = ({
  post,
  visible,
  handleCancel,
  handleSubmit,
}: Props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(post)
  }, [form, post])

  // const handleFinish = (data: Post) => {
  //   handleSubmit(data);
  // }

  return (
    <div>
      <Modal
        title="Update post"
        visible={visible}
        footer={[
          <Button key={1} onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key={2} form="modalEdit" htmlType="submit" type="primary">
            Submit
          </Button>,
        ]}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={(data) => handleSubmit({ ...post, ...data })}
          id="modalEdit"
          // onFinish={handleFinish}
        >
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
                rules={[
                  { required: true, message: 'Please input description!' },
                ]}
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
          </Row>
        </Form>
      </Modal>
    </div>
  )
}
