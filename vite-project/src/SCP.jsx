import { useState } from 'react';

function SCP({ scp }) {
  const [activeTab, setActiveTab] = useState('procedures');

  if (!scp) {
    return <div className="info-card">Select an SCP from the dropdown menu to view details</div>;
  }

  return (
    <div className="info-card fade-in">
      <div className="scp-text-wrapper">
        <h2 className="centered-header">{scp.name}</h2>
        <h4 className="object-class centered-header">Class: {scp.class}</h4>
        <img src={scp.image} alt={scp.name} className="scp-image" />

        <div className="tabs centered-buttons">
          <button className={`styled-btn ${activeTab === 'procedures' ? 'active' : ''}`} onClick={() => setActiveTab('procedures')}>Procedures</button>
          <button className={`styled-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
          <button className={`styled-btn ${activeTab === 'reference' ? 'active' : ''}`} onClick={() => setActiveTab('reference')}>Reference</button>
        </div>

        {activeTab === 'procedures' && <p>{scp.special_containment_procedures}</p>}
        {activeTab === 'description' && <p>{scp.description}</p>}
        {activeTab === 'reference' && <p>{scp.reference}</p>}
      </div>
    </div>
  );
}

export default SCP;
