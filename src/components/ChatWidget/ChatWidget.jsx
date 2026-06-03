import { useState } from "react";
import "./chatWidget.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m your Food Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };

    // Mock AI response (you can replace with backend later)
    const botReply = {
      from: "bot",
      text: getBotReply(input)
    };

    setMessages([...messages, userMsg, botReply]);
    setInput("");
  };

  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("order")) return "You can track your order in Order Status page 📦";
    if (msg.includes("menu")) return "Check our delicious menu on the homepage 🍕";
    if (msg.includes("delivery")) return "Delivery usually takes 30-40 minutes 🚴‍♂️";
    if (msg.includes("price")) return "Prices are affordable and start from ₹99 😋";

    return "I can help with orders, menu, delivery & tracking 😊";
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="chat-fab" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* CHAT BOX */}
      {open && (
        <div className="chat-window">

          <div className="chat-header">
            <span>Food Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`msg ${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatWidget;