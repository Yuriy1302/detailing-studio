/**
 * Переключение табов секции "Цены"
 */

const TABS = document.querySelectorAll('.price__tab');
const CONTENT = document.querySelectorAll('.price__content');
const ACTIVE_CLASS = 'is-active';

export function initTabs() {
  TABS.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      let selected = tab.getAttribute('data-tab');
      updateActiveTab(tab);
      updateActiveContent(selected);
    });
  });
}

function updateActiveTab (selected) {
  TABS.forEach((tab) => {
    if (tab && tab.classList.contains(ACTIVE_CLASS)) {
      tab.classList.remove(ACTIVE_CLASS);
    }
  });
  selected.classList.add(ACTIVE_CLASS);
};

function updateActiveContent(selected) {
  CONTENT.forEach((item) => {
    if (item && item.classList.contains(ACTIVE_CLASS)) {
      item.classList.remove(ACTIVE_CLASS);
    }
    let data = item.getAttribute('data-content');
    if (data === selected) {
      item.classList.add(ACTIVE_CLASS);
    }
  });
}
