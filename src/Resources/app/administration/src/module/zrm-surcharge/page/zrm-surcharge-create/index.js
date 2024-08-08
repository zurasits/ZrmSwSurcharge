const { Component } = Shopware;

export default {
    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },

    data() {
        return {
            selectedProduct: null
        }
    },

    methods: {
        getBundle() {
            this.selectedProduct = this.repository.create(Shopware.Context.api);
        },

        onClickSave() {
            this.isLoading = true;
            //todo save logic here
        }
    }

}