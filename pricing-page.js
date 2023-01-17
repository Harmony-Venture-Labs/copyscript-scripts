/**
 * Created: Jan 17, 2023
 * 
 * This file contains helper scripts for the copysmith website
 * Script tag: <script src="https://raw.githubusercontent.com/Harmony-Venture-Labs/copyscript-scripts/main/pricing-page.js" type="text/javascript"></script>
 */

const toggleBall = document.getElementById('toggle-ball');

const customPricingSlider = document.getElementById('pricing-slider')
customPricingSlider.onchange = (e) => {
  const value = e.currentTarget.value;

  if (value <= 25) {
    // handle < 25
    return
  }
  if (value > 25 && value <= 50) {
    // handle between
    return;
  }
  if (value > 50 && value <= 75) {
    // handle between
    return;
  }
  if (value > 75 && value <= 100) {
    // handle between
    return;
  }
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

console.log("imported")