import React, { } from 'react';

function Legend() {
  return (
    <div className="legend_container">
      <div className="legend_header">
        <div>← more exports</div>
        <div>more imports →</div>
      </div>

      <div className="legend_bar">
        <div style={{ backgroundColor: '#004987' }} />
        <div style={{ backgroundColor: '#009EDB' }} />
        <div style={{ backgroundColor: '#C5DFEF' }} />
        <div style={{ backgroundColor: '#FFD48E' }} />
        <div style={{ backgroundColor: '#FBAF17' }} />
        <div style={{ backgroundColor: '#B06E2A' }} />
      </div>
      <div className="legend_labels">
        <div>-70</div>
        <div>-30</div>
        <div>0</div>
        <div>30</div>
        <div>70</div>
      </div>
    </div>
  );
}

export default Legend;
