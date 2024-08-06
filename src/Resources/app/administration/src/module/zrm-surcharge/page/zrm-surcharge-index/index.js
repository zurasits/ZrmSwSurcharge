import template from './zrm-surcharge-index.html.twig';

export default {
    template,

    metaInfo() {
        return {
            title: this.$createTitle(),
        };
    },

    inject: ['repositoryFactory'],

    data() {
        return {
            repository: null,
            surchargeList: true,
        };
    },

    computed: {
        columns() {
            return this.getSurchargeColumns()
        }
    },

    created() {
        // this.createdComponent();
    },

    methods: {
        getSurchargeColumns() {
            return [
                {
                    property: 'productType',
                    label: this.$tc('zrm-surcharge.list.productType'),
                    routerLink: 'zrm.surcharge.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'surchargeType',
                    label: this.$tc('zrm-surcharge.list.surchargeType'),
                    routerLink: 'zrm.surcharge.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'surchargeValue',
                    label: this.$tc('zrm-surcharge.list.surchargeValue'),
                    routerLink: 'zrm.surcharge.detail',
                    inlineEdit: 'number',
                    allowResize: true,
                    primary: true
                },

            ];
        },

        createdComponent() {
            // this.repository = this.repositoryFactory.create('zrm-surcharge');
            // this.repository.search(new Criteria(), Shopware.context.api).then((result) => {
            //     this.surchargeList = result;
            // });
            this.surchargeList = [{
                'productArt': "coffee",
                'surchargeArt': "%",
                'surchargeValue': 10,
            }];
        }
    },
};