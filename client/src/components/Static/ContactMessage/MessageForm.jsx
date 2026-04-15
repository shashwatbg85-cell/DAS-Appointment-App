import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { webMessage } from "../../../redux/actions/authActions";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleMessage = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return toast.error("Please fill all the fields");
    }

    setLoading(true);
    const msgData = {
      name,
      contact: email,
      message,
    };

    try {
      await dispatch(webMessage(msgData)).unwrap();
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error(err || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mform">
      <h1>Send Us A Message</h1>
      <p>Our team will get back to you as soon as possible.</p>
      
      <form onSubmit={handleMessage}>
        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="Your Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="form-group mb-3">
          <input
            type="email"
            placeholder="Your Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group mb-3">
          <textarea
            placeholder="How can we help you?"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        
        <button 
          className="submit-btn w-100" 
          type="submit" 
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default MessageForm;