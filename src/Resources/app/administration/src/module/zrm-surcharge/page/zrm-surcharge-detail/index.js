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
            this.repository = this.repositoryFactory.create('category');
            this.getProducts();
        },

        getProducts() {
            const criteria = new Criteria();
            this.repository.search(criteria, Shopware.Context.api).then((result) => {
                // this.products = result;
                this.products = this.transformProducts(this.removeDuplicates(result));
                this.products = [ {label: "productname1", value: 1}, {label: "productname2", value: 2} ];
                console.log(result);

            }).catch((exception) => {
                this.createNotificationError({
                    title: this.$tc('zrm-surcharge.detail.errorTitle'),
                    message: "-------- esaa ----------" + exception
                });
            });
        },

        transformProducts(products) {
            return products.map(product => ({
                label: product.name,
                value: product.id
            }));
        },

        removeDuplicates(products) {
            const uniqueProducts = [];
            const productIds = new Set();

            products.forEach(product => {
                if (!productIds.has(product.id)) {
                    productIds.add(product.id);
                    uniqueProducts.push(product);
                }
            });

            return uniqueProducts;
        },

        onClickSave() {
            this.isLoading = true;
            console.log(this.selectedProduct);
            // this.repository.save(this.selectedProduct, Shopware.Context.api).then(() => {
            //     this.getProducts();
            //     this.isLoading = false;
            //     this.processSuccess = true;
            //     console.log(this.selectedProduct);
            // }).catch((exception) => {
            //     this.isLoading = false;
            //     this.createNotificationError({
            //         title: this.$tc('zrm-surcharge.detail.errorTitle'),
            //         message: " ++++++++++ " + exception
            //     });
            // });
        },

        saveFinish() {
            this.processSuccess = false;
        }
    }
}


