import { useCart } from "../../context/ProductsContext"
import style from "./style.module.css"

export const Cart = () => {

    const { cart, deleteProduct } = useCart()

    return (
        <div>
            {
                cart.length !== 0 && <h2>Carrinho</h2>
            }
            {
                
                cart.length !== 0 && (
                    <ul className={style.ul}>
                        {
                            cart.map((product, index) => (
                                <li className={style.li} key={index}>
                                    <img className={style.img} src={product.image} alt={product.title} />
                                    <h3 className={style.h3}>{product.title}</h3>
                                    <span className={style.span}>R$ {product.price.toFixed(2)}</span>
                                    <button onClick={() => deleteProduct(product)} className={style.button}>REMOVER DO CARRINHO</button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}