import { setHeaderFilter } from '../filter.js';

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.bindEventListeners();
  }

  render() {
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
        }

        .header .header__actions {
          position: relative;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown__content {
          display: none;
          position: absolute;
          background-color: #fff;
          border-radius: 1rem 0 1rem 1rem;
          min-width: 200px;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 0.5rem 1.5rem;
          z-index: 1;
          padding: 2rem;
          top: 100%;
        }

        .dropdown.open .dropdown__content {
          right: 40px;
          margin-top: 2.5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.2rem;
        }

        .dropdown.open .profile__content {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 1.5rem;
          border: 0;
          cursor: pointer;
        }

        .dropdown.open .profile__content:hover img {
          filter: invert(55%) sepia(55%) saturate(2800%) hue-rotate(346deg) brightness(104%) contrast(97%);
        }

        .dropdown.open .profile__content:hover {
          color: #F97316;
        }

        .dropdown.open .btn-notification img {
          filter: invert(55%) sepia(55%) saturate(2800%) hue-rotate(346deg) brightness(104%) contrast(97%);
        }

        .dropdown.open .btn-profile {
          background-color: #F97316;
        }
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
          <div class="dropdown dropdown-notification">
            <button class="btn__icon btn-notification active">
              <img src="../assets/icons/notification.svg"/>
            </button>
            <div class="dropdown__content">
              <img src="../assets/icons/edit.svg"/>
              Sem notificações
            </div>
          </div>

          <div class="dropdown dropdown-profile">
            <button class="btn__icon btn-profile active">
              <img src="../assets/imgs/profile-picture.png"/>
            </button>
            <button class="dropdown__content profile__content">
              Configurações
              <img src="../assets/icons/setting.svg"/>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  bindEventListeners() {
    const notificationButton = this.getNotificationButton();
    const profileButton = this.getProfileButton();
    const searchInput = this.getSearchInput();
    notificationButton.addEventListener('click', this.handleNotificationButtonClick.bind(this));
    profileButton.addEventListener('click', this.handleProfileButtonClick.bind(this));
    searchInput.addEventListener('input', setHeaderFilter);
  }

  getNotificationButton() {
    return this.querySelector('.btn-notification');
  }

  getProfileButton() {
    return this.querySelector('.btn-profile');
  }

  getSearchInput() {
    return this.querySelector('.search__input');
  }

  handleNotificationButtonClick() {
    const notificationDropdown = this.getNotificationDropdown();
    notificationDropdown.classList.toggle('open');
  }

  handleProfileButtonClick() {
    const profileDropdown = this.getProfileDropdown();
    profileDropdown.classList.toggle('open');
  }

  getNotificationDropdown() {
    return this.querySelector('.dropdown-notification');
  }

  getProfileDropdown() {
    return this.querySelector('.dropdown-profile');
  }
}

customElements.define('header-component', Header);

export default Header;
