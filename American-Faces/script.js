class HomeNav extends HTMLElement {

  // connect component
  connectedCallback() {
    this.innerHTML = '<div class="home"><a href = "index.html">Home</a></div>';
  }

}
customElements.define( 'home-nav', HomeNav );
