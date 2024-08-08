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

            this.repository.save(this.selectedProduct, Shopware.Context.api).then(() =>{
                this.isLoading = false;
                this.$router.push({ name: "zrm.surcharge.detail", params: {id: this.bundle.id} });
            }).catch((exception) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('zrm-surcharge.detail.errorTitle'),
                    message: exception
                })
            })
        }
    }

}