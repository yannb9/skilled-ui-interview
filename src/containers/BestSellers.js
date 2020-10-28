import React from 'react';
import { ItemList } from '../ItemList'
import { Styles } from '../StyledComponents'
import ShoeItem from '../components/ShoeItem'

export default function BestSellers(props){
    const {Container, Title, List} = Styles.BestSellers
    const {background, itemHoverColor, shoeColor, brandColor, priceColor} = props;
    const textStyles = {shoe:shoeColor, hover: itemHoverColor, brand:brandColor, price:priceColor}

    const containerStyle = {
        hidden: { opacity: 1, scale: 0 },
        visible: { opacity: 1, scale: 1,
          transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      };
      
    return(
        <Container
          className="bestsellers-container"
          style={{backgroundColor: background}}
          variants={containerStyle}
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeIn", duration: 1 }}>
          <Title>Bestsellers</Title>
          <List>
              {ItemList.map((item,index) =>(
                <ShoeItem
                  key={index}
                  background={background}
                  image={item.svg}
                  title={item.product_name}
                  brand={item.brand}
                  price={item.price}
                  textStyles={textStyles}
                />
              ))}
          </List>
      </Container>
    )
}
