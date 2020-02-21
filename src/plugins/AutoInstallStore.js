function autoInstall() {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(MyPlugin)
    }
}

const MyPlugin = {
    install(Vue, options) {
        Vue.alternativeStore = 'Example Property'
        Vue.alternativeMethods = function () {
            return Vue.alternativeStore
        }
        options.withInjection ? this.installGlobal() : this.installWithInjection()
    },

    installGlobal() {},
    installComponentInstance() {}
};