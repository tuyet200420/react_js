import { useState , useEffect} from "react";
import {
  Row,
  Button,
  Table,
  Space,
  Popconfirm,
} from "antd";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {
  createProductAction,
  editProductAction,
  deleteProductAction
} from '../../../redux/actions'
import ModifyProductModal from "./component/ModifyProductModal";

function ProductListHoc({productList,createProduct,editProduct,deleteProduct}){
  const [modifyProductData, setModifyProductData] = useState({});
  const [isShowModifyModal,setIsShowModifyModal]=useState('');
  const handleSubmitForm=(values)=>{
    if(isShowModifyModal === "create"){
      createProduct(
        {
          id: uuidv4(),
          ...values,
        }
      )}
    else{
      editProduct({
        id: modifyProductData.id,
        ...values,
      })

    }
    setIsShowModifyModal('');
  }

console.log("🚀 ~ file: index.jsx ~ line 15 ~ ProductListHoc ~ productList", productList)
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
              onConfirm={() => deleteProduct({ id: record.id })}
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
          //  pagination= {{
          //   pageSize: 4,
          //  }
          // }
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
function mapStateToProps(state) {
    const { productList } = state.productReducer
    return { productList}
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      createProduct:(params) => dispatch(createProductAction(params)),
      editProduct: (params) => dispatch(editProductAction(params)),
      deleteProduct: (params) => dispatch(deleteProductAction(params))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductListHoc)