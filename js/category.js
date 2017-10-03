// category json file
var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

var category = new Vue({

    el: '#category',

    data: {
        
     
        commits: null
        category: {
            "ResultCount": 4,
            
            "PageNumber": 1,
            "PageCount": 4,
            "Results": [{
                "Url": 'http://www.discoverychannel.co.in/in/en.html',
                "Title": 'Discovery',
                "Image": 'http://www.discoverychannel.co.in/content/dam/discovery/en/shows/wild-frank-in-africa/desktop/image-gallery/wild-frank-in-africa-gallery-1.jpg',
                "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
                "CatalogueName": 'Wild Frank In Africa',
                "ProductName": 'Africa',
                "CatalogueDate": 'THURSDAYS, 9PM',
                "CataloguePDF": null
            }, {
                "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
                "Title": 'River Monsters',
                "Image": 'http://www.discoverychannel.co.in/content/dam/discovery/en/shows/river-monsters/desktop/image-gallery/river-monsters-gallery-1-500x500.jpg',
                "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
                "CatalogueName": "Section B - Hydraulic Hose",
                "ProductName": "Hydraulic",
                "CatalogueDate": "20170906",
                "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
            }, {
                "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
                "Title": 'Breaking Point: Commando School Belgaum',
                "Image": 'http://www.discoverychannel.co.in/content/dam/discovery/en/shows/breaking-point/desktop/gallery/breaking-point-gallery-3.png',
                "Description": 'SHOWS',
                "CatalogueName": "Section A - Technical Data",
                "ProductName": "Hydraulic",
                "CatalogueDate": "20170903",
                "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
            }, {
                "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
                "Title": 'Destroyed in Seconds',
                "Image": 'http://www.discoverychannel.co.in/content/dam/discovery/en/shows/destroyed-in-seconds/desktop/image-gallery/destroyed-in-seconds-gallery-1.jpg',
                "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
                "CatalogueName": "Section I - Industrial Hose",
                "ProductName": "Industrial",
                "CatalogueDate": "20170907",
                "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
            }]
        }
    },

    created: function() {
        this.fetchCategoryData()
    },

    watch: {
        // currentBranch: 'fetchCategoryData'
    },

    filters: {
        // truncate: function (v) {
        //   var newline = v.indexOf('\n')
        //   return newline > 0 ? v.slice(0, newline) : v
        // },
        // formatDate: function (v) {
        //   return v.replace(/T|Z/g, ' ')
        // }
    },

    methods: {
        fetchCategoryData: function() {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL)
            xhr.onload = function() {
                self.commits = JSON.parse(xhr.responseText)
            }
            xhr.send()
        }
    }
})