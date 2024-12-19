import { Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    trim: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, trim, price, imgUrl }:
    StoreItemProps) {
        const {getItemQuantity, increaseCartQuantity, 
            decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100"  style={{ border:"none", background:"none"}}>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="250px"
                style={{ objectFit: "cover" }}
            />
            <div>
                <div  >
                    <h3 style={{color:"black", lineHeight:"0.4"}} >{name} / {trim}</h3>
                
                    <h5  >{formatCurrency(price)}<span style={{fontSize:"0.6em"}}> MSRP</span></h5>
                    <button style={{border:"1px solid black",  lineHeight:"0.4", height:"1.5em", marginBottom:"0px", color:"black"}} >Learn More Details</button>
                </div>
               
                 
                <div className="mt-auto">
                
                    {quantity === 0 ? 
                    (<button style={{border:"none",   height:"1.5em", backgroundColor:"black", color:"white"}} 
                    onClick={() => increaseCartQuantity(id)}
                    >Order Now</button>
                    )
                     : 
                    (
                        <div className="d-flex align-items-center flex-colum" style={{ gap: ".5rem" }}>
                            <button onClick={() =>removeFromCart(id)} 
                            style={{border:"none",   height:"1.5em", backgroundColor:"#666565", color:"white"}}   >Remove</button>
                            <div className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}> 
                                <button onClick={() => decreaseCartQuantity(id)} 
                                style={{border:"none",   borderRadius:"50%", width:"1.5em", height:"1.5em"}}>-</button>
                                <div>
                                    <span style={{fontSize:"1em", color:"red"}}     >{quantity} </span> in cart</div>
                                <button onClick={() => increaseCartQuantity(id)}
                                     style={{border:"none",   borderRadius:"50%", width:"1.5em", height:"1.5em"}}>+</button>
                            </div>
                            
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}