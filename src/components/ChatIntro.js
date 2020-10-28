import React from "react";
import { Styles } from "../StyledComponents";
import { ReactComponent as Waving } from "../svg/waving.svg";

export default function ChatIntro(props){
    const {Introduction, Profile, Name, Position, Message} = Styles.Chat;
    console.log(props.styles.message)
    return(
        <Introduction className="introduction" style={{backgroundColor: props.background}}>
        <Profile className="profile">
          <div>{props.profileImg}</div>
          <div className="title" style={{ marginLeft: "5%" }}>
            <Name style={{color:props.styles.name}}>{props.name}</Name>
            <Position style={props.styles.role}>{props.role}</Position>
          </div>
        </Profile>

        <Message style={{color:props.styles.message}}>
          Hi there.<Waving />
          {props.message}
        </Message>
      </Introduction>
    )
}