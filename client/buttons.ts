const dangerClass = ['btn', 'btn-danger', 'my-auto', 'p-2'];
const successClass = ['btn', 'btn-success', 'my-auto', 'p-2'];

export class ADanger extends HTMLAnchorElement {
    constructor(text: string, url: string) {
        super();

        this.classList.add(...dangerClass);
        
        this.innerText = text;
        this.href = url;
    }
}

class ASuccess extends HTMLAnchorElement {
    constructor(text: string, url: string) {
        super();

        this.classList.add(...successClass);
        
        this.innerText = text;
        this.href = url;
    }
}

class BtnDanger extends HTMLButtonElement {
    constructor(text: string) {
        super();

        this.classList.add(...dangerClass);
        
        this.value = text;
    }
}

class BtnSuccess extends HTMLButtonElement {
    constructor(text: string, url: string) {
        super();

        this.classList.add(...successClass);
        
        this.value = text;
    }
}

window.customElements.define('a-danger', ADanger, { extends: 'a'});
window.customElements.define('a-success', ASuccess, { extends: 'a'});
window.customElements.define('btn-danger', BtnDanger, { extends: 'button'});
window.customElements.define('btn-success', BtnSuccess, { extends: 'button'});