const BASE_URL = 'https://gist.githubusercontent.com/abdalabaaji/8e3341e3eade0a0f0d9f8f6fd772c4f8/raw/21e8fab410219f2cfde4500a61bf5f427e1f72a7/products'

// load html page in specific div using fetch api
async function loadPage(pageUrl) {
    const mainContent = document.getElementById('main-content');
    const page = await fetch(pageUrl)
    const pageHTMLContent = await page.text()
    mainContent.innerHTML = pageHTMLContent;

    // Hint : Load the form page and add event listener to the form here
}

