import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Styles = {
    BestSellers:{
        Container: styled(motion.div)`
            border-radius: 24px;
            padding: 22px;
            margin-right:5%;
        `,
        Title: styled.h1`
            font-family: Montserrat;
            font-size:24px;
            font-weight:600;
            letter-spacing: 0.25px;
            color: #12121F;
        `,
        List: styled.ul`
            width: 340px;
            display: grid;
            gap: 15px;
            padding: 0;
            overflow: hidden;
        `,
        Item:styled(motion.a)`
            display: flex;
            flex-direction: row;
            padding: 5%;
            margin-top:5%;
            border-radius:24px;
            cursor: pointer;
            transition: easeInOut;
        `,
        SvgWrapper: styled.div``,
        Content: styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 5%;
            font-family: 'Montserrat';
        `,
        ProductName: styled.span`
            display:block;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.25px;
            line-height: 20px;
            color: #FE805C;
            margin:5px;
        `,
        ProductBrand: styled.span`
            display:block;
            font-size: 12px;
            letter-spacing: 0.25px;
            line-height: 16px;
            color: #AFAFBD;
            margin:5px;
        `,
        ProductPrice: styled.span`
            display:block;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.25px;
            color: #12121F;
            line-height: 24px;
            margin:5px;
        `,
    },
    Chat:{
        Container: styled(motion.div)`
            position:absolute;
            left: 10px;
            bottom:10px;
            width: 375px;
            background-color:#FFF;
            border-radius: 24px;
        `,
        Close:styled.button`
            position: absolute;
            top: 10%;
            right: 5%;
            background: transparent;
            border: none;
            box-shadow: none;
            cursor: pointer;
        `,
        Introduction: styled.div`
            width: 375px;
            // background: #4643D3;
            border-radius: 24px 24px 0px 0px;
        `,
        Profile:styled.div`
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-family: Montserrat;
            margin-left: 5%;
            padding: 5%;
        `,
        ProfileImg:styled.div``,
        ProfileContent:styled.div``,
        Name: styled.p`
            font-size: 18px;
            font-weight: 600;
            line-height: 22px;
            letter-spacing: 0.25px;
            margin: 0;
        `,
        Position: styled.p`
            font-size: 14px;
            font-weight: 300;
            line-height: 17px;
            letter-spacing: 0.25px;
            opacity: 0.5;
            margin: 5px 0;
        `,
        Message:styled.p`
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;
            letter-spacing: 0.25px;
            padding: 0 10% 5%;
            margin: 0;
            width: 250px;
        `,
        ChatInput:styled.div``,
        Form: styled.form``,
        Input: styled.input`
            font-family: Montserrat;
            font-size: 14px;
            line-height: 24px;
            color: #AFAFBD;
            width: 70%;
            height: 60px;
            border: none;
            border-radius: 0px 0px 24px 24px;
            padding: 0 5%;

        `,
        Submit:styled.button`
            font-family: Montserrat;
            font-size: 15px;
            line-height: 18px;
            font-weight: 600;
            color: #5856D7;
            border: none;
            background: transparent;
            cursor: pointer;
        `,
        Error:styled.span`
            position: absolute;
            left: 5%;
            bottom: 5px;
            font-family: Montserrat;
            font-size: 12px;
            line-height: 14px;
            color: #e94560;
        `,

    }
}