import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import styled from 'styled-components';

class SendCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         user: "",
         message: ""
      };
   }

   onChangeUser = (event) => {
      this.setState({ user: event.target.value })
   };

   onChangeMessage = (event) => {
      this.setState({ message: event.target.value });
      if (event.keycode === 13) {
         this.onClickSend()
      };
   };

   onSendMessage = (event) => {
      event.preventDefault();
      let text
      if (this.state.user === "" || this.state.messageSent === "") {
         alert("User or message empty!")
         window.location.reload()

      } else if (this.state.user === "Eu" || this.state.user === "eu" || this.state.user === "EU" || this.state.user === "eU") {
         text = {
            userSent: "",
            messageSent: this.state.message
         }
      } else {
         text = {
            userSent: this.state.user,
            messageSent: this.state.message
         }
      }

      this.props.addNewMessage(text);
      this.setState({ message: "" })
   };

   render() {
      return (
         <MainContainer>
            <ThemeProvider theme={theme}>
               <form onSubmit={this.onSendMessage}>
                  <InputUser
                     type="text"
                     label="User"
                     value={this.state.user}
                     onChange={this.onChangeUser}
                     variant="outlined"
                     color="primary"
                  />
                  <InputMessage
                     type="text"
                     label="Type your message..."
                     value={this.state.message}
                     onChange={this.onChangeMessage}
                     variant="outlined"
                     color="primary"
                     rowsMax={2}
                  />

                  <SendButton type="submit">Send</SendButton>
               </form>
            </ThemeProvider>
         </MainContainer>
      )
   }
}

export default SendCard;

const theme = createMuiTheme({
   palette: {
      primary: {
         main: "#e7ff8c"
      }
   }
})

const MainContainer = styled.main`
   background-color: #60971c;
   padding: 10px;
   text-align: center;
   border-top: 1px solid darkgreen;
`

const InputUser = styled(TextField)`
   && {
      margin: 0 5px;
      max-width: 100px;
      border: none;
      border-radius: 5px;
   }
`

const InputMessage = styled(TextField)`
   && {
      margin: 0 15px;
      border: none;
      width: 350px;
   }
`

const SendButton = styled(Button)`
   && {
      border: none;
      border-radius: 5px;
      background: #b2ff59;
      padding: 15px 20px;
   } &&:hover {
      background: #e7ff8c;
   }
`