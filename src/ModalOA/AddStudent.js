import React, { useState } from 'react';
import {Modal, Button, DatePicker} from 'antd';
import { Form, Input, Select } from 'antd';
const { Option } = Select;
const layout = {
    wrapperCol: {
        span: 16,
    },
};
const AddStudent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const AddStudents = () => {
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
            <Button type="link" onClick={AddStudents} style={{position: 'fixed',color: "black",fontSize:19, width:'20%',margin:'1.4% 8%'}} horizontal>
                ДОДАТИ СТУДЕНТА
            </Button>
            <Modal title="ДОДАТИ СТУДЕНТА"
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   okText="ДОДАТИ" cancelText="СКАСУВАТИ"
                   baground="black"
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
                    <Form.Item
                        name="firstName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="ПРІЗВИЩЕ" />
                    </Form.Item>
                    <Form.Item
                        name="secondName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="ІМ'Я" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="ПО БАТЬКОВІ" />
                    </Form.Item>
                    <Form.Item name="birthday" rules={[
                        {
                            required: true,
                        },
                    ]} label="ДАТА НАРОДЖЕННЯ">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="НОМЕР ТЕЛЕФОНУ" />
                    </Form.Item>
                    <Form.Item name="day" rules={[
                        {
                            required: true,
                        },
                    ]} label="ДАТА ЗАСЕЛЕННЯ">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="faculty"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="ФАКУЛЬТЕТ"
                            allowClear
                        >
                            <Option value="1">Навчально-науковий інститут соціально-гуманітарного менеджменту</Option>
                            <Option value="2">Навчально-науковий інститут міжнародних відносин та національної безпеки</Option>
                            <Option value="3">Навчально-науковий інститут права ім. І. Малиновського</Option>
                            <Option value="4">Факультет романо-германських мов</Option>
                            <Option value="5">Економічний факультет</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="group"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="ГРУПА" />
                    </Form.Item>
                    <Form.Item
                        name="course"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="КУРС" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};
export default AddStudent;
