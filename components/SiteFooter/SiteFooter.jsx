"use client";

import React from "react";

const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const InstagramIcon = () => (
  <Icon>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Icon>
);

const TikTokIcon = () => (
  <Icon>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </Icon>
);

const YoutubeIcon = () => (
  <Icon>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </Icon>
);

const LinkedinIcon = () => (
  <Icon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

const GithubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);

const SiteFooter = () => {
  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h1 className="f-logo">Rohit Survase</h1>
          <p className="f-desc">
            Computer Engineering Student At Isbm College Of Engineering, Pune. <br />
            Building Web And Mobile Applications With AI-Assisted Development Workflows.
          </p>
          <div className="f-socials">
            <a href="https://github.com/rohitsurvase08" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rohitsurvase08" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/rohitsurvase08" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </Icon>
            </a>
            <a href="https://t.me/rohitsurvase08" target="_blank" rel="noreferrer" aria-label="Telegram">
              <Icon>
                <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.153-.95.38-1.19.813-.097.176-.151.371-.154.586-.003.424.207.785.48 1.01.273.226.588.365.85.452l3.727 1.175c.414.136.848.049 1.188-.166.809-.511 1.639-1.038 2.468-1.564 1.658-1.052 3.316-2.104 4.973-3.156.124-.076.276-.155.431-.15.084.003.171.03.252.094.145.115.162.325.099.502-.051.143-.16.25-.271.341-1.47 1.203-2.94 2.407-4.41 3.61-.433.355-.867.71-1.3 1.065-.15.123-.3.262-.406.444-.108.183-.164.4-.129.614.03.192.117.37.23.527.113.157.257.288.407.405 1.277 1 2.554 2 3.831 3 .15.117.31.23.483.323.174.092.365.157.559.18.361.044.734-.081.99-.338.26-.26.398-.62.497-1.003.699-2.7 1.398-5.4 2.097-8.1.1-.386.198-.772.295-1.158.068-.272.135-.553.153-.838.017-.282-.01-.578-.132-.837-.123-.259-.35-.467-.614-.606a1.77 1.77 0 0 0-.864-.155z" />
              </Icon>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="f-col">
            <h3>Navigation</h3>
            <a href="#about">About</a>
            <a href="#projects-section">Projects</a>
            <a href="#contact-section">Contact</a>
          </div>
          <div className="f-col">
            <h3>Connect</h3>
            <a href="https://github.com/rohitsurvase08" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rohitsurvase08" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/rohitsurvase08" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://t.me/rohitsurvase08" target="_blank" rel="noreferrer">Telegram</a>
            <a href="mailto:survaser06@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rohit Rajesh Survase. All Rights Reserved.</p>
        <p>Built With Next.js, Tailwind Css & AI-Assisted Development</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
