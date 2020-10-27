import BaseMixin from '../BaseProduct/Mixin';

export default target => class Mixin extends target.mixin(BaseMixin) {
    get name() {
        return 'ExtendedMixin';
    }
}
