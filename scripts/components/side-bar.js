class Nav extends HTMLElement {
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
        .side-menu {
          top: 10%;
          border-left: 1px solid var(--color-border);
          height: 100vh;
          width: 12.5vw;
          min-width: 120px;
          background-color: var(--side-menu-background);
        }
        
        .side-menu__actions {
          padding: 10px;
          text-align: center;
          padding-top: 1rem;
          height: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          list-style-type: none;
        }
        
        .side-menu__action a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--color-primary);
        }
        
        .side-menu__action:hover,
        .side-menu__action.active {
          filter: invert(55%) sepia(55%) saturate(2800%) hue-rotate(346deg) brightness(104%) contrast(97%);
        }
        
        .side-menu__action-exit {
          margin-top: auto;
        }
        
        .side-menu__action-exit a {
          color: var(--red);
          margin-top: auto;
        }
      </style>
      <aside class="side-menu">
        <ul class="side-menu__actions">
          <li class="side-menu__action">
            <a href="../pages/home.html">
              <img src="../assets/icons/home.svg"/>
              Página inicial
            </a>
          </li>
          <li class="side-menu__action">
            <a href="../pages/favoritos.html">
              <img src="../assets/icons/heart.svg"/>
              Favoritos
            </a>
          </li>
          <li class="side-menu__action">
            <a href="../pages/anuncio.html">
              <img src="../assets/icons/folder.svg"/>
              Meus anúncios
            </a>
          </li>
          <li class="side-menu__action side-menu__action-exit">
            <a href="../pages/index.html">
              Sair
              <img src="../assets/icons/arrow-left.svg"/>
            </a>
          </li>
        </ul>
      </aside>
    `;
  }

  bindEventListeners() {
    const sideMenuActions = this.getSideMenuActions();

    sideMenuActions.forEach((link) => {
      link.addEventListener("click", this.handleLinkClick.bind(this, link));
    });
  }

  getSideMenuActions() {
    return this.querySelectorAll(".side-menu__action a");
  }

  handleLinkClick(link) {
    const parentListItem = link.parentElement;
    if (link.href === window.location.href) {
      parentListItem.classList.add("active");
    } else {
      parentListItem.classList.remove("active");
    }
  }
}

customElements.define("side-bar-component", Nav);

export default Nav;
