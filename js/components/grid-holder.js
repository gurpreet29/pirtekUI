// grid holder


var grid = new Vue({

    el: '#grid-holder',

    data: {

        category: dataJson,
        filterResult: [],
        result: [],

        selectedVal: '',
        lastSelectedVal: '',
        elementLoaded: '',
        pageLoad: ''
    },

    created: function() {

        this.result = this.category.Results;

        this.elementLoaded = this.result.length;
        this.pageLoad = this.category.ItemToLoad;
        this.selectedVal = this.category.Filter[0];
        this.getFiltered();
    },

    watch: {

        selectedVal: function() {
            this.getFiltered();
            this.lastSelectedVal = this.selectedVal;
        }
    },



    methods: {

        getFiltered: function() {
            this.filterResult = [];
            var itemCount = 0;
            if (this.selectedVal === this.lastSelectedVal) {
                this.pageLoad = 0;
            }

            if (this.selectedVal === this.category.Filter[0] || this.selectedVal === undefined) {
                this.filterResult = this.category.Results;
                this.elementLoaded = this.category.Results.length;

            } else {
                for (var i = 0; i < this.category.Results.length; i++) {

                    if (this.category.Results[i].FilterName === this.selectedVal) {

                        this.filterResult.push(this.category.Results[i]);

                        itemCount++;
                    }
                }

                this.elementLoaded = itemCount;
            }

            if (this.lastSelectedVal != this.selectedVal || this.selectedVal === undefined) {
                this.pageLoad = this.category.ItemToLoad;
                this.result = this.filterResult.slice(0, this.category.ItemToLoad);
            } else {
                this.result = this.filterResult.slice(0, this.pageLoad);
            }

        },
        loadMore: function() {
            if (this.pageLoad < this.elementLoaded) {
                this.pageLoad = this.pageLoad + this.category.ItemToLoad;
            }


            this.result = this.filterResult.slice(0, this.pageLoad);

        }


    },

    computed: {}

});