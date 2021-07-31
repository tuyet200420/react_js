import { useState } from "react";
import {
  Row,
  Button,
  Table,
  Space,
  Popconfirm,
} from "antd";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';
import {
  createProductAction,
  editProductAction,
  deleteProductAction
} from '../../../redux/actions'
import ModifyProductModal from "../ProductListHoc/component/ModifyProductModal";

function ProductToolkit(props){
    const dispatch = useDispatch();
    const {productList} = useSelector((state) => state.productReducer)
  const [modifyProductData, setModifyProductData] = useState({});
  const [isShowModifyModal,setIsShowModifyModal]=useState('');
  const handleSubmitForm=(values)=>{
    if(isShowModifyModal == "create"){
        dispatch(createProductAction(
        {
          id: uuidv4(),
          ...values,
        }
      ))}
    else{
        dispatch(editProductAction({
        id: modifyProductData.id,
        ...values,
      }))
     
    }
    setIsShowModifyModal('');
  }
console.log("🚀 ~ file: index.jsx ~ line 15 ~ ProductToolkit ~ productList", productList)
    const columnsDate = [
      {
        title: 'Name',
        dataIndex: 'name',
        key:'name'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (value,b) => value.toLocaleString(),
        
      },
      {
        title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) =>{
       
        return(
          <Space>
            <Button
                type="primary"
                onClick={()=>{
                
                  setIsShowModifyModal("edit")
                  setModifyProductData(record);
                }}
              >
                Edit
            </Button>
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => dispatch(deleteProductAction({ id: record.id }))}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
            <Button
              type="danger"
            >
              Xóa
            </Button>
            </Popconfirm>
          </Space>
          

        )
      }
      },
    ];
    const tableData = productList.map((productItem,productIndex)=>{
      return {
        key: productIndex,
        ...productItem
      }
    })
    console.log("🚀 ~ file: index.jsx ~ line 58 ~ tableData ~ tableData", tableData)
    return(
        <div style={{padding:"30px"}}>
          <Button type="primary"
            onClick={()=>{
              setIsShowModifyModal("create")
              setModifyProductData({
                name: '', price: 0 
              })
            }}
           style={{background:'#7cb305', borderColor:'#7cb305',width:150, marginBottom:30}}
          >
            Thêm
          </Button>
          <Table
           columns={columnsDate} 
           dataSource={tableData} 
           size="middle"  />
           <ModifyProductModal
            isShowModifyModal={isShowModifyModal}
            setIsShowModifyModal={setIsShowModifyModal}
            handleSubmitForm={handleSubmitForm}
            modifyProductData={modifyProductData}
           />
        </div>
    )
}

export default ProductToolkit