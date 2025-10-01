import React, { useState } from "react";
import { db } from "../firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Adddata = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        createdAt: serverTimestamp(),
      });
      setMessage(""); // clear input
      alert("Message added successfully ✅");
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Adddata;
