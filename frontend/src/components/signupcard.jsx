import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const SignUpCard = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-in logic here
  };

  return  (
    <>
      {/* Inline styles */}
      <style>{`
        /* Fullscreen overlay */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7); /* Darker semi-transparent background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px); /* Adds a subtle blur effect */
          animation: fadeIn 0.3s ease-in-out; /* Smooth fade-in animation */
        }

        /* Centered card */
        .signup-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0); /* Soft gradient background */
          border: 1px solid #ddd;
          padding: 30px;
          border-radius: 15px;
          width: 420px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Enhanced shadow for a modern look */
          position: relative;
          text-align: center;
          animation: slideUp 0.4s ease-in-out; /* Smooth slide-in effect */
        }

        /* Close button */
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
          color: #888; /* Subtle color */
          transition: color 0.2s ease;
          width: 20px;
        }

        .close-btn:hover {
          color:rgb(207, 14, 14); /* Bright red on hover */
        }

        /* Input fields */
        .signup-card input {
          width: 100%;
          padding: 12px 15px;
          margin-top: 8px;
          margin-bottom: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
          transition: border 0.3s ease;
        }

        .signup-card input:focus {
          border-color: #ff4d4d; /* Highlight on focus */
          outline: none;
        }

        /* Submit button */
        .signup-card button {
          width: 100%;
          padding: 12px;
          background: #ff4d4d;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
          width: fit-content;   
        }

        .signup-card button:hover {
          background:rgb(125, 111, 111); /* Slightly darker red on hover */
        }

        /* Links */
        .signup-card a {
          color: #ff4d4d;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.2s ease;
        }

        .signup-card a:hover {
          color: #e43d3d;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>


      <div className="overlay" onClick={onClose}>
        <div className="signup-card" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-bold mb-4">Welcome to Tomato!</h2>
          <p className="mb-4">Sign in to start ordering delicious food.</p>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">Create Account</Link>
          </p>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpCard;
