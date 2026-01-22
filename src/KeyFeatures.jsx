import React from 'react'

const KeyFeatures = () => {
  return (
    <div className="features-container">
        <h2 className="features-title">
            🚀 Key Features at a Glance
        </h2>

        <div className="features-grid">
           
            <div className="feature-card">
                <div className="feature-icon">🔐</div>
                 <h3>Biometric Authentication</h3>
                 <p>Advanced biometric verification for secure identity 🧑‍💻</p>
            </div>

             <div className="feature-card">
                <div className="feature-icon">⛓️</div>
                 <h3>Blockchain Security</h3>
                 <p>Decentralized and tamper-proof identity records 🔒</p>
            </div>

             <div className="feature-card">
                <div className="feature-icon">⭐</div>
                 <h3>Reputation Score System</h3>
                 <p>Trust scores managed securely on the blockchain 📊</p>
            </div>

             <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                 <h3>Tamper-Proof Identity</h3>
                 <p>Immutable and verifiable digital identity ✅</p>
            </div>
        </div>

    </div>
  )
}

export default KeyFeatures