const tabs = document.getElementById("tabs_articles");
const tabNav = tabs.querySelectorAll(".tabs_articles-link");

tabNav.forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.getAttribute("data-href");
    const tabBody = document.querySelector(id);
    const activeTab = tabs.querySelectorAll(".active");

    if (activeTab !== tab) {
      for (let i = 0; i < activeTab.length; i++)
        activeTab[i].classList.remove("active");
    }
    tabBody.classList.add("active");
    tab.classList.add("active");
  });
});

// remove all active classes
// const tabs_articles = document.getElementById('tabs_articles');

// function removeActive(element) {
//   const activeEl = element.querySelectorAll('.active');
//   for (let i = 0; i < activeEl.length; i++) activeEl[i].classList.remove('active');
// }
// function toggleArticles(e) {
//   const elementControl = e.target.closest('.tabs_articles-link');
//   if (elementControl) {
//     e.preventDefault();
//     removeActive(tabs_articles);
//     const tabId = e.target.getAttribute('href');
//     const activeTab = tabs_articles.querySelector(tabId);
//     elementControl.classList.add('active');
//     activeTab.classList.add('active');
//   }
// }

// tabs_articles.addEventListener('click', toggleArticles)
