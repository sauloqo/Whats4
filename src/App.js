import React from 'react';
import propTypes from 'prop-types';
import SendCard from './components/SendCard';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    }
  }

  addNewMessage = (props) => {
    this.setState({ messageList: [...this.state.messageList, props] })
  }

  render() {
    const myMessages = this.state.messageList.map((element, index) => {
      if (element.userSent === "") {
        return (
          <UserTextContainer>
            <UserMessages>{element.messageSent}</UserMessages>
          </UserTextContainer>
        )
      } else {
        return (
          <ContactMessages key={index}><strong>{element.userSent}</strong>{element.messageSent}</ContactMessages>
        )
      }
    })

    return (
      <MainContainer>
        {myMessages}
        <SendCard addNewMessage={this.addNewMessage}></SendCard>
      </MainContainer>
    )
  }
}

SendCard.propTypes = {
  userSent: propTypes.string.isRequired,
  messageSent: propTypes.string.isRequired
};

export default App;

const MainContainer = styled.main`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid green;
  justify-content: flex-end;
  background-color: whitesmoke;
`

const ContactMessages = styled.p`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  max-width: 300px;
`

const UserMessages = styled.span`
  display: flex;
  flex-direction: column;
  margin: 5px 15px;
  align-items: flex-end;
`

const UserTextContainer = styled.div`  
  background: #b2ff59;
  margin: 5px 5px;
  align-self: flex-end;
  border: 1px solid lightgrey;
  border-radius: 5px;
  max-width: 300px;
`