class Nav extends HTMLElement {
  constructor() { super() }
  connectedCallback() {
    this.innerHTML = `
    <style>
      .side-menu {
        display: absolute;
        border-left: 1px solid var(--color-border);
        height: 100%;
        width: 12.5vw;
        background-color: var(--side-menu-background);
      }
      
      .side-menu__actions {
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
      
      .side-menu__action:hover {
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
          <a href="../pages/home.html">
            <img src="../assets/icons/heart.svg"/>
            Favoritos
          </a>
        </li>
        <li class="side-menu__action">
          <a href="../pages/home.html">
            <img src="../assets/icons/folder.svg"/>
            Meus anúncios
          </a>
        </li>
        <li class="side-menu__action side-menu__action-exit">
          <a href="../pages/home.html">
            Sair
            <img src="../assets/icons/arrow-left.svg"/>
          </a>
        </li>
      </ul>
    </aside>
    
    `
  }
}

customElements.define('side-bar-component', Nav);

export default Nav;