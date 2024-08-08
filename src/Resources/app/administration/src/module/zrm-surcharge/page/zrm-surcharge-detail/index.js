import template from './zrm-surcharge-detail.html.twig';

const { Mixin } = Shopware;
const { Criteria } = Shopware.Data;

export default {
    template,

    inject: ['repositoryFactory'],

    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },

    mixins: [
        Mixin.getByName('notification'),
    ],

    data() {
        return {
            isLoading: false,
            processSuccess: false,
            repository: null,
            products: [],
            selectedProduct: {},
            criteria: new Criteria(),
            options: [
                { value: 'absolute', name: this.$tc('zrm-surcharge.detail.surchargeAbsolute') },
                { value: 'percentage', name: this.$tc('zrm-surcharge.detail.surchargePercentage') },
            ]
        };
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('product');
            this.getProducts();
        },

        getProducts() {
            const criteria = new Criteria();
            this.repository.search(criteria, Shopware.Context.api).then((result) => {
                this.products = result;
                console.log(result);

            }).catch((exception) => {
                this.createNotificationError({
                    title: this.$tc('zrm-surcharge.detail.errorTitle'),
                    message: exception
                });
            });
        },

        onClickSave() {
            this.isLoading = true;
            console.log(this.selectedProduct);
            //todo surcharge save logit here

        },

        saveFinish() {
            this.processSuccess = false;
        }
    }
}


