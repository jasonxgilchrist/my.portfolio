import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <footer>
      <a
<<<<<<< HEAD
        href="https://www.instagram.com/jasongilchristp"
=======
        href="https://www.instagram.com/jasonxgilchrist"
>>>>>>> parent of 7e43599 (Updated Work and Social Media details)
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/instagram.png`}
          alt="instagram-icon"
        />
      </a>
      <a
<<<<<<< HEAD
        href="https://www.facebook.com/jasongilchristp"
=======
        href="https://www.facebook.com/jasonxgilchrist"
>>>>>>> parent of 7e43599 (Updated Work and Social Media details)
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/facebook.png`}
          alt="facebook-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jasongilchristp"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/linkedin.png`}
          alt="linkedin-icon"
        />
      </a>
      <a
        href="https://www.twitter.com/jasongilchristp"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${process.env.PUBLIC_URL}/twitter.png`} alt="twitter-icon" />
      </a>
    </footer>
  );
}
