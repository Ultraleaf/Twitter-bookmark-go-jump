chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://twitter.com/i/bookmarks" });
});