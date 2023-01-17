/**
 * Created: Jan 17, 2023
 * 
 * This file contains helper scripts for the copysmith website
 */

const toggleBall = document.getElementById('toggle-ball');
const sliderStyle = document.createElement('style');
sliderStyle.innerHTML = `
  .price-panel.growth, .price-panel.enterprise, .pricing_panel.enterprise {
    display: none;
  }
`
document.body.appendChild(sliderStyle)

const customPricingSlider = document.getElementById('pricing-slider')
customPricingSlider.onchange = (e) => {
  const value = e.currentTarget.value;

  // slope from 100k to 300k = 4000, slope from 300k to 600k = 6000

  // startup = 299
  // growth = 499
  // Enterprise = Contact us


  if (value < 50) {
    // handle < 50
    sliderStyle.innerHTML = `
      .price-panel.growth, .price-panel.enterprise, .pricing_panel.enterprise {
        display: none;
      }
      .price-panel.startup, .pricing_panel.startup {
        display: block;
      }
    `
    return
  }
  if (value >= 50 && value < 100) {
    // handle < 50
    sliderStyle.innerHTML = `
      .price-panel.startup, .price-panel.enterprise, .pricing_panel.enterprise {
        display: none;
      }
      .price-panel.growth, .pricing_panel.growth {
        display: block;
      }
    `;
    return
  }
  sliderStyle.innerHTML = `
    .price-panel.growth, .price-panel.startup, .pricing_panel.regular {
      display: none;
    }
    .price-panel.enterprise, .pricing_panel.enterprise {
      display: block;
    }
  `
}


const yearlyMonthlyToggle = document.getElementById('toggle');

yearlyMonthlyToggle.onchange = (e) => {
  if (!toggleBall) return;
  if (e.currentTarget.checked) {
    toggleBall.innerText = "Monthly";
    return;
  }
  toggleBall.innerText = "Yearly";
}
