import { Row, Col,Button ,Input,Space} from 'antd';
import '../../css/admin.css'
// import { useRef } from "react";
import { MenuOutlined} from '@ant-design/icons';
import history from "../../utils/history";
function HeaderAdmin({isShowSidebar,setIsShowSidebar}){
   
    const { Search } = Input;
   
    // const header=useRef("");
    const onSearch = value => console.log(value);
    
    return(
        <>
            <div className="header-container header-conatiner-admin">
                <Row gutter={[10, 5]}>
                    <Col
                        
                        sm={24}
                        md={6}>
                        <h1 className="logo"
                        onClick={()=>{
                            history.push("/")
                        }}
                        >HT TUYẾT</h1>
                    </Col>
                   
                    <Col
                    xs={24}
                    sm={24}
                     md={10}>
                          
                        
                    </Col>
                    <Col md={8}>

                        <Space size= {10}
                        style={{width:"100%", justifyContent:"flex-end"}}
                        >
                            <div>
                                <Button className="btn_link" onClick={() => history.push('/login')} danger>Đăng xuất</Button>
                            </div>
                            
                        </Space>
                    </Col>
                </Row>
                <span className="logo_tagbar"
                onClick={()=>{
                    setIsShowSidebar(!isShowSidebar)
                }}
                >
                    <MenuOutlined />
                </span>
            </div>
            
           
        </>
    )
}
export default HeaderAdmin;