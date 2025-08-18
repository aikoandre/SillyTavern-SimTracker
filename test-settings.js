// Test script to verify settings persistence
// Run this in the browser console to test settings saving/loading

function testSettingsPersistence() {
  console.log("=== Testing Settings Persistence ===");
  
  // Get the extension settings
  const extensionSettings = SillyTavern.getContext().extensionSettings;
  const MODULE_NAME = "silly-sim-tracker";
  
  console.log("Current extension settings:", extensionSettings[MODULE_NAME]);
  
  // Test setting a value
  if (extensionSettings[MODULE_NAME]) {
    const originalValue = extensionSettings[MODULE_NAME].isEnabled;
    console.log("Original isEnabled value:", originalValue);
    
    // Toggle the value
    extensionSettings[MODULE_NAME].isEnabled = !originalValue;
    console.log("Changed isEnabled to:", extensionSettings[MODULE_NAME].isEnabled);
    
    // Try to save
    try {
      SillyTavern.getContext().saveSettingsDebounced();
      console.log("Settings save called successfully");
    } catch (error) {
      console.error("Error calling saveSettingsDebounced:", error);
    }
    
    // Check if the UI reflects the change
    const checkbox = document.getElementById("isEnabled");
    if (checkbox) {
      console.log("UI checkbox checked state:", checkbox.checked);
      console.log("Should match settings value:", extensionSettings[MODULE_NAME].isEnabled);
    } else {
      console.log("UI checkbox not found");
    }
  } else {
    console.log("Extension settings not found - extension may not be initialized");
  }
}

// Run the test
testSettingsPersistence();