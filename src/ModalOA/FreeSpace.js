import React, { useState } from 'react';
import {Modal, Button, Descriptions} from 'antd';
import { Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
    wrapperCol: {
        span: 16,
    },
};
const FreeSpace = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const FreeSpaces = () => {
        setIsModalVisible(true);
    };
    const handleOk = (values) => {
        console.log(values);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    return (
        <div className='h1'>
            <Button type="link" onClick={FreeSpaces} style={{position: 'fixed',color: "black",fontSize:19, width:'20%',margin:'1.45% 19%'}} horizontal >
                ВІЛЬНІ МІСЦЯ
            </Button>
            <Modal title="ВІЛЬНІ МІСЦЯ" width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="ПОШУК" cancelText="ВИХІД">
                <Form {...layout} form={form} name="control-hooks" handleOk={handleOk}>
                    <Form.Item
                        name="hostel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="ГУРТОЖИТОК №"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <Descriptions title="User Info">
                    <Descriptions.Item label="Гуртожиток"> </Descriptions.Item>
                    <Descriptions.Item label="Кімната"> </Descriptions.Item>
                    <Descriptions.Item label="Кількість місць"> </Descriptions.Item>
                    <Descriptions.Item label="Стать"> </Descriptions.Item>
                </Descriptions>
            </Modal>
        </div>
    );
};
export default FreeSpace;
