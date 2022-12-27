import { useCart } from "../../context/ProductsContext"
import { products } from "../../Products"
import style from "./style.module.css"

export const ProductsList = () => {

    const { addProduct } = useCart()

    return (
        <>
            <h2>Produtos</h2>
            <ul className={style.ul}>
                {
                    products.map((product, index) => (
                        <li className={style.li} key={index}>
                            <img className={style.img} src={product.image} alt={product.title} />
                            <h3 className={style.h3}>{product.title}</h3>
                            <span className={style.span}>R$ {product.price.toFixed(2)}</span>
                            <button onClick={() => addProduct(product)} className={style.button} type="button">ADICIONAR AO CARRINHO</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}