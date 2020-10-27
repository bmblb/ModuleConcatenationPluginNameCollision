import BaseView from '../BaseProduct/View';
import Mixin from './Mixin';

export default class View extends BaseView.mixin(Mixin) {
    getHTML() {
        let result = super.getHTML();

        result += '<div>bar</div>';

        return result;
    }
}
