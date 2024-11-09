// Access the Telegram WebApp API
const telegram = window.Telegram.WebApp;

// Define an object to hold all the data we want to display
const data = {
    version: telegram.version,
    platform: telegram.platform,
    colorScheme: telegram.colorScheme,
    themeParams: telegram.themeParams,
    isExpanded: telegram.isExpanded,
    viewportHeight: telegram.viewportHeight,
    viewportStableHeight: telegram.viewportStableHeight,
    headerColor: telegram.headerColor,
    backgroundColor: telegram.backgroundColor,
    bottomBarColor: telegram.bottomBarColor,
    isClosingConfirmationEnabled: telegram.isClosingConfirmationEnabled,
    isVerticalSwipesEnabled: telegram.isVerticalSwipesEnabled,
};

// Function to display the information on the webpage
function displayTelegramData(data) {
    const container = document.getElementById('telegramData');
    container.innerHTML = `
        <p><strong>Version:</strong> ${data.version}</p>
        <p><strong>Platform:</strong> ${data.platform}</p>
        <p><strong>Color Scheme:</strong> ${data.colorScheme}</p>
        <p><strong>Theme Parameters:</strong> ${JSON.stringify(data.themeParams)}</p>
        <p><strong>Is Expanded:</strong> ${data.isExpanded}</p>
        <p><strong>Viewport Height:</strong> ${data.viewportHeight}</p>
        <p><strong>Viewport Stable Height:</strong> ${data.viewportStableHeight}</p>
        <p><strong>Header Color:</strong> ${data.headerColor}</p>
        <p><strong>Background Color:</strong> ${data.backgroundColor}</p>
        <p><strong>Bottom Bar Color:</strong> ${data.bottomBarColor}</p>
        <p><strong>Closing Confirmation Enabled:</strong> ${data.isClosingConfirmationEnabled}</p>
        <p><strong>Vertical Swipes Enabled:</strong> ${data.isVerticalSwipesEnabled}</p>
    `;
}

// Call the function to display the data
displayTelegramData(data);

// Example of setting colors and expanding the app using available methods
telegram.setHeaderColor('#FF5733'); // Sets the header color
telegram.setBackgroundColor('#F0F0F0'); // Sets the background color
telegram.setBottomBarColor('#333333'); // Sets the bottom bar color
telegram.enableClosingConfirmation(); // Enables closing confirmation

// Listen to events, such as when viewport height changes
telegram.onEvent('viewportChanged', (isStateStable) => {
    data.viewportHeight = telegram.viewportHeight;
    data.viewportStableHeight = telegram.viewportStableHeight;
    displayTelegramData(data); // Update display with new values
});
