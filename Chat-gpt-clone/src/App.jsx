import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useEffect, useRef, useState } from 'react';

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState(""); 
  const [messages, setMessages] = useState([
    {
      text: "Hi, I’m ChatGPT, an AI companion created by OpenAI. My purpose is to help you explore ideas, solve problems, and find answers to anything you’re curious about. I’m also here to collaborate on creative projects or just chat about topics that interest you.",
      isBot: true,
    },
  ]);

  useEffect(() => {
    // Scroll to the bottom when messages are updated
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) {
      // Prevent empty or whitespace-only messages
      alert("Please enter a valid message before sending.");
      return;
    }

    const userMessage = input; // Capture user input
    setInput(""); // Clear input field

    try {
      // Add user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, isBot: false },
      ]);

      // Call OpenAI API and get bot's response
      const res = await sendMsgToOpenAI(userMessage);

      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: res, isBot: true },
      ]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  };

  const handleQuery = async (e) => {
    const queryText = e.target.value;

    if (!queryText.trim()) {
      // Prevent empty or whitespace-only queries
      alert("Invalid query. Please try again.");
      return;
    }

    try {
      // Add query to the chat as user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: queryText, isBot: false },
      ]);

      // Call OpenAI API and get bot's response
      const res = await sendMsgToOpenAI(queryText);

      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: res, isBot: true },
      ]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="App">
        <div className="sidebar">
          <div className="upperSide">
            <div className="upperSideTop">
              <img src={gptlogo} className="logo" alt="GPT Logo" />
              <span className="brand">ChatGPT</span>
            </div>
            <button className="midBtn" onClick={() => window.location.reload()}>
              <img src={addBtn} className="addBtn" alt="Add Button" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button
                className="query"
                onClick={handleQuery}
                value={"What is programming"}
              >
                <img src={msgIcon} alt="Message Icon" />
                What is programming
              </button>
              <button
                className="query"
                onClick={handleQuery}
                value={"How to use an API?"}
              >
                <img src={msgIcon} alt="Message Icon" />
                How to use an API?
              </button>
            </div>
          </div>
          <div className="lowerSide">
            <div className="listItems">
              <img src={home} className="listItemsImg" alt="Home Icon" />
              Home
            </div>
            <div className="listItems">
              <img src={saved} className="listItemsImg" alt="Save Icon" />
              Save
            </div>
            <div className="listItems">
              <img src={rocket} className="listItemsImg" alt="Rocket Icon" />
              Upgrade to Pro
            </div>
          </div>
        </div>

        <div className="main">
          <div className="chats">
            {messages.map((message, i) => (
              <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                <img
                  src={message.isBot ? gptImgLogo : userIcon}
                  className="chatImg"
                  alt={message.isBot ? "GPT Logo" : "User Icon"}
                />
                <p>{message.text}</p>
              </div>
            ))}
            <div ref={msgEnd}></div>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input
                type="text"
                placeholder="Send a message...."
                value={input}
                onKeyDown={handleEnter}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="send" onClick={handleSend}>
                <img src={sendBtn} alt="Send Button" />
              </button>
            </div>
            <p>
              ChatGPT may produce inaccurate information about people, places,
              or facts. ChatGPT August 25 version.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;