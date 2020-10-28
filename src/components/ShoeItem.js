import React from 'react';
import { Styles } from '../StyledComponents'

export default function ShoeItem(props){
    const {Item, SvgWrapper, Content, ProductName, ProductBrand, ProductPrice} = Styles.BestSellers
      
    const itemStyle = {
        hidden: { y: 50, opacity: 0, },
        visible: { y: 0, opacity: 1, },
        hover: {
            backgroundColor: props.textStyles.hover,
            transition: { type: "tween", ease: "easeInOut"}
        }
      };

    return(
        <Item className="shoeItem" variants={itemStyle} whileHover="hover" style={{backgroundColor: props.background}} >
            <SvgWrapper className="svg-wrapper">{props.image}</SvgWrapper>
            <Content>
                <ProductName style={{color: props.textStyles.shoe}} >{props.title}</ProductName>
                <ProductBrand style={{color: props.textStyles.brand}} >{props.brand}</ProductBrand>
                <ProductPrice style={{color: props.textStyles.price}} >{`$${props.price.toFixed(2)}`}</ProductPrice>
            </Content>
        </Item>
    )
}
