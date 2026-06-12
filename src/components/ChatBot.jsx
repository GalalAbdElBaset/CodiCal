// ChatBot.jsx
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaRobot } from "react-icons/fa";

// ======= Animation Pulse =======
const pulseRing = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

// ======= Styled Robot Button =======
const RobotButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #0E74AB, #0E74AB);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  animation: ${pulseRing} 2s infinite;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.5);
  }
`;

// ======= Tooltip =======
const Tooltip = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  background: #0E74AB;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? "0" : "10px")});
  transition: all 0.3s ease;
`;

export default function ChatBot() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: 30, right: 30, zIndex: 999 }}>
      <Tooltip show={hovered}>تواصل مع البوت 🤖</Tooltip>
      <RobotButton
        href="https://wa.me/201234567890" // ضع رقمك هنا
        target="_blank"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaRobot size={32} color="#fff" />
      </RobotButton>
    </div>
  );
}