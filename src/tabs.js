const toggleTab = (event, idName) => {

  const activeTab = document.getElementById(idName);
  const tabs = document.querySelectorAll("button");
  const tabBody = document.getElementsByClassName('tab-body');

  for (let i = 0; i < tabBody.length; i++) {
    if (tabs[i].classList.contains("active")) {
      tabs[i].classList.remove("active");
      tabBody[i].classList.remove("active");
    }
  }

  event.currentTarget.classList.add("active");
  activeTab.classList.add("active");
}