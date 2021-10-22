import styled from "styled-components"
import { popularProducts } from "../data"

const Container = styled.div`
    padding: 20px;
    display: flex;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item}/>
            ))}
        </Container>
    )
}

export default Products