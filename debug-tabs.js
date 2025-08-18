// Debug script to test tab functionality
// Run this in the browser console to test tab interactions

function debugTabs() {
  console.log("=== Debugging Tabbed Interface ===");
  
  // Find sidebar containers
  const leftSidebar = document.getElementById("sst-global-sidebar-left");
  const rightSidebar = document.getElementById("sst-global-sidebar-right");
  
  console.log("Left sidebar:", leftSidebar);
  console.log("Right sidebar:", rightSidebar);
  
  // Check for tabs and cards in active sidebar
  const activeSidebar = rightSidebar || leftSidebar;
  if (!activeSidebar) {
    console.log("No active sidebar found");
    return;
  }
  
  const tabs = activeSidebar.querySelectorAll(".sim-tracker-tab");
  const cards = activeSidebar.querySelectorAll(".sim-tracker-card");
  
  console.log(`Found ${tabs.length} tabs and ${cards.length} cards`);
  
  // Log current state
  tabs.forEach((tab, index) => {
    const isActive = tab.classList.contains("active");
    const transform = window.getComputedStyle(tab).transform;
    const rect = tab.getBoundingClientRect();
    console.log(`Tab ${index}: active=${isActive}, transform=${transform}`);
    console.log(`  Position: top=${rect.top}, left=${rect.left}, right=${rect.right}`);
  });
  
  cards.forEach((card, index) => {
    const isActive = card.classList.contains("active");
    const isHidden = card.classList.contains("tab-hidden");
    const opacity = window.getComputedStyle(card).opacity;
    const visibility = window.getComputedStyle(card).visibility;
    const rect = card.getBoundingClientRect();
    console.log(`Card ${index}: active=${isActive}, hidden=${isHidden}, opacity=${opacity}, visibility=${visibility}`);
    console.log(`  Position: top=${rect.top}, left=${rect.left}, right=${rect.right}`);
  });
  
  // Check the tabs container positioning
  const tabsContainer = activeSidebar.querySelector(".sim-tracker-tabs");
  if (tabsContainer) {
    const rect = tabsContainer.getBoundingClientRect();
    const transform = window.getComputedStyle(tabsContainer).transform;
    console.log(`Tabs container: top=${rect.top}, transform=${transform}`);
    console.log(`  Should be vertically centered in viewport (around ${window.innerHeight/2})`);
  }
  
  // Test clicking the first tab
  if (tabs.length > 0) {
    console.log("Testing click on first tab...");
    tabs[0].click();
    
    setTimeout(() => {
      console.log("After click:");
      tabs.forEach((tab, index) => {
        const isActive = tab.classList.contains("active");
        console.log(`Tab ${index}: active=${isActive}`);
      });
      cards.forEach((card, index) => {
        const isActive = card.classList.contains("active");
        const isHidden = card.classList.contains("tab-hidden");
        console.log(`Card ${index}: active=${isActive}, hidden=${isHidden}`);
      });
    }, 500);
  }
}

// Run the debug function
debugTabs();