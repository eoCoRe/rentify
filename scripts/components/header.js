import { setHeaderFilter } from '../filter.js';

class Header extends HTMLElement {
  constructor() { super() }
  connectedCallback() {
    this.innerHTML = `
    <style>
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-background);
        width: 100%;
        padding: 0.5rem 2rem;
        height: 10%;
      }
      
      .header__search {
        width: 60%;
        display: flex;
        align-items: center;
        background-color: #fdfdff;
        padding: 0.375rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-border);
      }
      
      .search__input {
        flex: 1;
        border: none;
        background: none;
        outline: none;
        padding-left: 0.625rem;
        font-size: 0.875rem;
      }
      
      .header__search:focus-within {
        box-shadow: 0 0 0 2px var(--color-accent);
      }
      
      .header__logo {
      cursor: pointer; 
      ;}
    </style>

    <header class="header">
      <img class="header__logo" src="../assets/imgs/logo.png">
      <div class="header__search">
        <input class="search__input" type="text"/>
        <img class="search__icon" src="../assets/icons/search.svg"/>
      </div>
      <div class="header__actions">
        <button class="btn__icon">
          <img src="../assets/icons/question.svg"/>
        </button>
        <button class="btn__icon">
          <img src="../assets/icons/notification.svg"/>
        </button>
        <button class="btn__icon">
          <img src="../assets/imgs/profile-picture.png"/>
        </button>
      </div>
    </header>
    `
    const searchInput = this.querySelector('.search__input');
    searchInput.addEventListener('input', setHeaderFilter);

  }
}

customElements.define('header-component', Header);

export default Header