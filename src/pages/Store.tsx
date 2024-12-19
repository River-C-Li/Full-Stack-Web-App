import {Col, Row} from "react-bootstrap"
import {StoreItem} from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return(<div style={{width:"95%", display:"flex", justifySelf:"center"}}>
  
    <Row md={2} xs={1} lg={3} className="g-3" >
    <div style={{height:"100px", width:"100%"}}></div>
    <div style={{height:"150px", width:"100%", fontSize:"48px", color:"black", display:"flex", justifyContent:"center", alignItems:"center"}}>
        Find your perfect match.</div>
        {storeItems.map(item=>(
            <Col key={item.id}>
            <StoreItem {...item}/></Col>
        ))}
         <div style={{height:"100px", width:"100%"}}></div>
    </Row>
    </div>)
  }
  