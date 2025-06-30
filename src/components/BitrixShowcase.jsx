import React, { useState } from 'react';
import './BitrixShowcase.css';
import {
  FaUsers,
  FaCheckCircle,
  FaBullhorn,
  FaBook,
  FaHandshake,
  FaVideo,
  FaUserTie,
  FaFolderOpen,
  FaCogs,
} from 'react-icons/fa';

const bitrixOptions = [
  { icon: <FaHandshake />, label: 'CRM & Sales', image: '/assets/crm.png' },
  { icon: <FaUsers />, label: 'Workgroups', image: '/assets/workgroup.jpg' },
  { icon: <FaCheckCircle />, label: 'Task Management', image: '/assets/tasks_and_projects-main.png' },
  { icon: <FaBullhorn />, label: 'Marketing', image: '/assets/marketing.jpg' },
  { icon: <FaBook />, label: 'Knowledge Base', image: '/assets/knowledge_base.jpg' },
  { icon: <FaVideo />, label: 'Online Meetings', image: '/assets/online meeting.jpg' },
  { icon: <FaUserTie />, label: 'HR Tools', image: '/assets/HR.jpg' },
  { icon: <FaFolderOpen />, label: 'Document Drive', image: '/assets/drive.jpg' },
  { icon: <FaCogs />, label: 'Automation', image: '/assets/automation.jpg' },
];

const BitrixShowcase = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bitrix-showcase-wrapper">
      {/* Blurred Background */}
      <img
        src="/assets/bitrix24-blur.jpg"
        alt="Blurred Bitrix24"
        className="background-blur"
      />

      {/* Clear Hover Image */}
      {hovered !== null && (
        <img
          src={bitrixOptions[hovered].image}
          alt="Clear feature"
          className="feature-highlight"
        />
      )}

      {/* Floating Panel */}
      <div className="tile-panel">
        <h6>Manage your business with Bitrix24</h6>
        <div className="tile-grid">
          {bitrixOptions.map((item, i) => (
            <div
              key={i}
              className="tile"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="tile-icon">{item.icon}</div>
              <small>{item.label}</small>
            </div>
          ))}
        </div>
        <button className="start-btn">Get Started →</button>
      </div>
    </div>
  );
};

export default BitrixShowcase;
