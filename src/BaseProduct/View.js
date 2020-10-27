import Base from "./Base";

export default class View extends Base {
    get name() {
        return 'View';
    }

    render() {
        document.body.innerHTML = this.getHTML();
    }

    getHTML() {
        return '<div>foo</div>';
    }
}
