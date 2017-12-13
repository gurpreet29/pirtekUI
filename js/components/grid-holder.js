// grid holder

if (dataJson === undefined) {
    var dataJson = {
        "ResultCount": 0,
        "ItemToLoad": 0,
        "Filter": [],
        "Results": [{
            "Url": null,
            "Image": null,
            "ItemTitle": null,
            "ItemName": null,
            "FilterName": null,
            "IsDownlable": null,
            "PhoneNo": null
        }]
    };
}



if (document.getElementById("grid-holder") != undefined) {
    var grid = new Vue({

        el: '#grid-holder',

        data: {

            category: dataJson,
            filterResult: [],
            result: [],

            selectedVal: '',
            selectedValselect: '',
            lastSelectedVal: '',
            elementLoaded: '',
            pageLoad: ''
        },

        created: function() {

            this.result = this.category.Results;
            this.elementLoaded = this.result.length;
            this.pageLoad = this.category.ItemToLoad;
           this.selectedValselect = this.selectedVal = this.category.Filter[0];
            this.getFiltered();
        },

        watch: {

            selectedValselect: function() {
               this.selectedValue(this.selectedValselect);
            }
        },



        methods: {  
            selectedValue: function(value) {
                this.selectedVal= value;
                this.getFiltered();
                this.lastSelectedVal = this.selectedVal;
            },

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


                // call global function to reset height of items in row
                uif.gridHeight();
            }


        },

        computed: {}

    });
}