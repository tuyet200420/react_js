import { Row, Col,Button ,Input,Space} from 'antd';
// import { useRef } from "react";
import { ShoppingCartOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import history from "../utils/history";
function Header({page}){
   
    const { Search } = Input;
   
    // const header=useRef("");
    const onSearch = value => console.log(value);
    
    return(
        <>
            <div className="header-container">
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
                          {page!='register' && (
                              <Search 
                              className="header_search"
                              placeholder="Tìm kiếm sản phẩm..." onSearch={onSearch} enterButton="Tìm kiếm"/>
                        )}
                        
                    </Col>
                    <Col md={8}>

                        <Space size= {10}
                        style={{width:"100%", justifyContent:"flex-end"}}
                        >
                            <div>
                                <Button className="btn_link" onClick={() => history.push('/register')}type="link">Đăng ký</Button>|
                                <Button className="btn_link" onClick={() => history.push('/login')} type="link">Đăng nhập</Button>
                            </div>
                            <div className="cart_shoping">
                                <ShoppingCartOutlined />
                            </div>
                        </Space>
                    </Col>
                </Row>
            </div>
            
            <nav >
                <Row 

                gutter={[10]}>
                    {page!='register' && (
                            <Col>
                        <div><MenuUnfoldOutlined /> DANH MỤC SẢN PHẨM</div>
                             </Col>
                        )}
                    
                </Row>
            </nav>
        </>
    )
}
export default Header;