import React, { useState,useEffect } from 'react';
import { Modal, Form, Input } from 'antd'
function ModifyProductModal({
    isShowModifyModal,
    setIsShowModifyModal,
    handleSubmitForm,
    modifyProductData
}){
    const [modifyProductForm] = Form.useForm();
    useEffect(() => {
        if (isShowModifyModal) {
          modifyProductForm.resetFields();
        }
      }, [isShowModifyModal]);
    
      
    return(
        <>
       
        <Modal title={isShowModifyModal} 
        visible={!!isShowModifyModal} onOk={() =>{
            modifyProductForm.submit()
            setIsShowModifyModal('')
        }} onCancel={()=>setIsShowModifyModal('')}>
        <Form
            form={modifyProductForm}
            initialValues={modifyProductData}
            onFinish={(values) => handleSubmitForm(values)}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Title"
                name="name"
                rules={[{ required: true, message: 'Please input your Title!' }]}
            >
            <Input />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please input your price!' }]}
            >
            <Input />
            </Form.Item>
      </Form>
        </Modal>
            
        </>
    )
}
export default ModifyProductModal