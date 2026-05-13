const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
 <footer class="bg-dark text-white text-center footer">
      <div class="row">
        <div class="col-12 col-lg-4">
          <h3 class="text-primary">Nos horaires</h3>
          <p>Du mardi au dimanche 12:00-14:00 18:00-23:00</p>
        </div>
        <div class="col-6 col-lg-4">
          <p>
            Quai Antique <br />
            5 rue de la rue <br />
            311500 Ville<br />
            04 01 01 01 01<br />
          </p>
        </div>
        <div class="col-6 col-lg-4">
          <p>contact@quaiantique.com</p>
        </div>
      </div>
    </footer>
`;


class Footer extends HTMLElement {
  connectedCallback() {
    const content = footerTemplate.content.cloneNode(true);
    this.appendChild(content);
      }
}

customElements.define('footer-component', Footer);