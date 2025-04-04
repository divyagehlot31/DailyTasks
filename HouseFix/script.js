
  const pricingData = [
    {
      title: "Residential Plumbing",
      price: "$199",
      duration: "/Month",
      features: [
        "Free Diagnostics & Consultation",
        "Plumbing Repairs",
        "Emergency Plumbing",
        "Sewer & Drain Cleaning",
        "Trenchless Sewer Replacement",
        "Heater Installation & Replacement, Repair"
      ]
    },
    {
      title: "Commercial Plumbing",
      price: "$499",
      duration: "/Month",
      features: [
        "Installations, Repairs, And Replacements",
        "Leak Detection And Repair",
        "Water & Gas Piping ",
        "Drain Cleaning & Sewer Service",
        "Trenchless Sewer Replacement",
        "Heater Installation & Replacement, Repair"
      ]
    },
    {
      title: "Commercial Plumbing",
      price: "$499",
      duration: "/Month",
      features: [
        "Installations, Repairs, And Replacements",
        "Leak Detection And Repair",
        "Water & Gas Piping ",
        "Drain Cleaning & Sewer Service",
       "Trenchless Sewer Replacement",
        "Heater Installation & Replacement, Repair"
      ]
    }
    
  ];

  const container = document.getElementById("pricingContainer");

  pricingData.forEach(plan => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-12 col-sm-12 mb-4";
    
    const featureList = plan.features.map(feature => `
      <li class="pricing-feature-item">
        <div class="pricing-feature-icon">
          <img src="images/right-up-arrow.svg" alt="icon">
        </div>
        <p class="pricing-feature-text">${feature}</p>
      </li>
    `).join('');

    col.innerHTML = `
      <div class="pricing-item">
        <div class="pricing-content">
          <h4 class="pricing-title">${plan.title}</h4>
          <div class="pricing-month">
            <span class="price">${plan.price}</span>
            <span class="time">${plan.duration}</span>
          </div>
          <ul class="pricing-features">
            ${featureList}
          </ul>
          <div>
            <a href="" class="pricing-btn">Get Started</a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
