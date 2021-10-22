import styled from "styled-components"
// import { popularProducts } from "../data"

const Container = styled.div``

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon></Icon>
            </Info>
        </Container>
    )
}

export default Product
