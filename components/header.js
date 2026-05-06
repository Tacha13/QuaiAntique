
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Quai Antique</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/">Accueil</a></li>
          <li class="nav-item"><a class="nav-link" href="/pages/galerie.html">Galerie</a></li>
          <li class="nav-item"><a class="nav-link" href="#">La carte</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Les réservations</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Mon compte</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Connexion / Déconnexion</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
`;


class Header extends HTMLElement {
  connectedCallback() {
    const content = headerTemplate.content.cloneNode(true);
    this.appendChild(content);
    console.log(content);
    
  }
}

customElements.define('header-component', Header);