const tabs = document.querySelectorAll(".press_tabs--item");

tabs.forEach((tab) => {
  const button = tab.querySelector(".press_tabs--button");
  button.addEventListener("click", () => {
    const activeItem = document.querySelector(".active");
    if (!tab.classList.contains("active")) {
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      tab.classList.add("active");
    } else {
      activeItem.classList.remove("active");
    }
  });
});

// const tabs = document.getElementById('press_tabs');

// const showItem = (element) => {
//   element.classList.add('active');
// }

// const hideItem = () => {
//   const activeElement = tabs.querySelector('.active');
//   if (activeElement) {
//     activeElement.classList.remove('active');
//   }
// }

// function toggleTabs(event) {
//   const button = event.target.closest('.press_tabs--button');
//   console.log(button);
//   if (button) {
//     const item = button.closest('.press_tabs--item');

//     if (!item.classList.contains('active')) {
//       hideItem();
//       showItem(item);
//     } else {
//       hideItem();
//     }
//   }
// }
// tabs.addEventListener('click', toggleTabs);
