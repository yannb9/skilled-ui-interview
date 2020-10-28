import React, { Component } from "react";
import ChatIntro from "../components/ChatIntro";
import { AnimatePresence } from "framer-motion";
import { Styles } from "../StyledComponents";
import { ReactComponent as CloseIcon } from "../svg/close.svg";

export default class Chat extends Component {
  state = {
    email: "",
    error: "",
    isVisible: false,
  };

  closeChat = (event) => {
    event.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let err;
    const { email } = this.state;
    if (!email) {
      err = "Please enter an email";
    } else if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)) {
      err = "Invalid email address";
    } else {
      err = "";
    }
    this.setState({
      error: err,
    });
  };

  componentDidMount() {
    var timout = this.props.showChatIn * 1000;
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, timout);
  }

  render() {
    const {Container, Close, ChatInput, Form, Input, Submit, Error} = Styles.Chat;
    const { background, name, nameColor, role, roleColor, messageColor, img, message } = this.props;
    const introPropStyles = {name:nameColor, position:roleColor, message:messageColor}

    const variant = {
      visible: { opacity: 1, x: 10 },
      hidden: { opacity: 0, x: -100 },
      transition: { delay: 0, when: "beforeChildren", staggerChildren: 0.1 },
    };

    return (
      <AnimatePresence>
        {this.state.isVisible && (
          <Container
            variants={variant}
            style={{}}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 0.2 }}
            exit={{ opacity: 0, x: -100 }}
            className="container"
          >
            <Close href="/#" onClick={this.closeChat} className="close"><CloseIcon /></Close>

            <ChatIntro
                background={background}
                profileImg={img}
                name={name}
                positon={role}
                message={message}
                styles={introPropStyles}
            />

            <ChatInput className="chat-input">
              <Form onSubmit={this.handleSubmit}>
                <Input
                  placeholder="Type your email..."
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Submit type="submit">Send</Submit>
                {this.state.error &&  (
                  <Error>{this.state.error}</Error>
                )}
              </Form>
            </ChatInput>
          </Container>
        )}
      </AnimatePresence>
    );
  }
}
