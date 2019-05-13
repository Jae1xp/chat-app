import React, { Component } from 'react'

const DUMMY_DATA = [
  {
      senderId: 'perborgen',
      text: 'Hey, how is it going?'
  },
  {
      senderId: 'janedoe',
      text: 'Great! How about you?'
  },
  {
      senderId: 'perborgen',
      text: 'Good to hear! I am great as well'
  }
]

class MessagesList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div className="message">
              <div className="message-username">{message.text}</div>
              <p className="message-text">{message.senderId}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessagesList
