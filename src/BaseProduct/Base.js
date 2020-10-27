export default class Base {
    static mixin(...mixins) {
        let C = this,
            i;

        // wrap each class C using mixins[i] to produce the next class
        for (i = 0; i < mixins.length; ++i) {
            const
                mixin = mixins[i],
                tag = Symbol('mixinTag');

            if (C[tag]) {
                continue;
            }

            C = mixin(C);
            C[tag] = true; 
        }

        return C;
    }
}
