import { useState } from 'react';

function Nav({ scp, onSCPSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown-btn styled-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select SCP
      </button>

      {isOpen && (
        <ul className="dropdown-content">
          {scp.map((scpItem) => (
            <li
              key={scpItem.name}
              onClick={() => {
                setIsOpen(false);
                onSCPSelect(scpItem);
              }}
            >
              {scpItem.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
