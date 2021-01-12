import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🥺": "pleading face",
  "😊": "Smiling",
  "🔥": "fire",
  "❤️": "red heart"
};

// converting an object to array of keys
const emojis = Object.keys(emojiDict);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [result, setResult] = useState("result will appear here");

  const emojiClickHandler = (emoji) => {
    setEmoji(emoji);
    const output = emojiDict[emoji];

    if (output) {
      setResult(output);
    } else {
      setResult("meaning of this emoji not known");
    }
  };

  const emojiChangeHandler = (event) => {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDict) {
      setResult(emojiDict[inputEmoji]);
    } else {
      setResult("meaning of this emoji not known");
    }
  };

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input
        placeholder="put an emoji here to see the meaning"
        onChange={emojiChangeHandler}
        value={emoji}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <p>{emoji}</p>

      <h3>{result}</h3>

      {emojis.map((emoji, key) => (
        <span key={key} onClick={() => emojiClickHandler(emoji)}>
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
