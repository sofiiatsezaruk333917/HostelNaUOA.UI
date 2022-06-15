import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, Select } from 'antd';

const { Option } = Select;
const layout = {
    wrapperCol: {
        span: 16,
    },
};
const AddRoom = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const AddRooms = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        console.log(values);
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    return (
        <div className='h1'>
            <Button type="link" onClick={AddRooms} style={{position: 'fixed',color: "black",fontSize:19, width:'20%',margin:'1.5% -4%'}} horizontal >
                ДОДАТИ КІМНАТУ
            </Button>
            <Modal title="ДОДАТИ КІМНАТУ"
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   okText="ДОДАТИ" cancelText="СКАСУВАТИ"
            >
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
                    <Form.Item
                        name="room"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="КІМНАТА №" />
                    </Form.Item>
                    <Form.Item
                        name="places"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="КІЛЬКІСТЬ МІСЦЬ"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="ОБЕРІТЬ СТАТЬ"
                            allowClear
                        >
                            <Option value="female">ЖІНОЧА</Option>
                            <Option value="male">ЧОЛОВІЧА</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};
export default AddRoom;
