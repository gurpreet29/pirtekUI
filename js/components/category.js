// USING-VUE.HTML

// // category json file
// // var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

// var category = new Vue({

//     el: '#vue-holder',

//     data: {
//         // branches: ['master', 'dev'],
//         currentBranch: 'master',
//         // commits: null
//         // category: {
//         //     "ResultCount": 4,
//         //     "PageNumber": 1,
//         //     "PageCount": 4,
//         //     "Results": [{
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'https://wallpaperscraft.com/image/otter_wet_water_animal_95494_800x600.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'https://wallpaperscraft.com/image/raccoon_paws_animal_funny_103443_800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'http://wallpaperscraft.com/image/otter_animal_wool_fur_beautiful_36197_800x600.jpg',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'https://thumbs-prod.si-cdn.com/zMXsdiAVDxnl92g30TDiGkzvriQ=/800x600/filters:no_upscale():focal(880x405:881x406)/https://public-media.smithsonianmag.com/filer/88/ac/88acca63-e84f-4525-9dfe-052d1d62b559/071_francis_perez.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": null
//         //         },


//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'https://wallpaperscraft.com/image/lemur_face_eyes_animal_57923_800x600.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'http://www.millcreekbirdpark.co.nz/SiteContent/Images/images/800x600/discover/mill-creek-duck.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTMNxTdsQEXYKYNzCVxzdhr_Ok7bWFLF8uXt0-pE35zPRg_yJKQ',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcpiCxyHIdzxs3J3UM41-lRAbX4BfMYJnVJkPTAcANaYQLE2SYw',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": null
//         //         },

//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2010/05/skunk-in-grass-800x600.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'https://wallpaperscraft.com/image/cat_face_glasses_thick_65455_800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxL8lW4qusbC1tLyZsmOmfsgHgZptUDPGS1f8XTW0Ruc8Ym3vQw',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'https://i.kinja-img.com/gawker-media/image/upload/s---9Tu2Cp6--/c_scale,f_auto,fl_progressive,q_80,w_800/18mfysetb5mtsjpg.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         },
//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'http://weiw.lightshedder.com/Landscape-Wildlife/Space-Coast-2012/i-6ptBK4z/0/L/IMG5278-L.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'http://michaelcommon.com/wp-content/uploads/2015/11/PetPortrait_000-800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'http://vuing.com/wp-content/uploads/2016/02/amazing-photography-internet-favorite-picture-best-National-Geographic-photos-2015-5-800x600.jpg',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'http://vuing.com/wp-content/uploads/2016/09/amazing-photo-caimain-butterflies-drinking-tears-flower-cowan-1-800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": null
//         //         },
//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'https://wallpaperscraft.com/image/otter_wet_water_animal_95494_800x600.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'https://wallpaperscraft.com/image/raccoon_paws_animal_funny_103443_800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'http://wallpaperscraft.com/image/otter_animal_wool_fur_beautiful_36197_800x600.jpg',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'https://thumbs-prod.si-cdn.com/zMXsdiAVDxnl92g30TDiGkzvriQ=/800x600/filters:no_upscale():focal(880x405:881x406)/https://public-media.smithsonianmag.com/filer/88/ac/88acca63-e84f-4525-9dfe-052d1d62b559/071_francis_perez.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": null
//         //         },
//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'https://wallpaperscraft.com/image/lemur_face_eyes_animal_57923_800x600.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'http://www.millcreekbirdpark.co.nz/SiteContent/Images/images/800x600/discover/mill-creek-duck.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTMNxTdsQEXYKYNzCVxzdhr_Ok7bWFLF8uXt0-pE35zPRg_yJKQ',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcpiCxyHIdzxs3J3UM41-lRAbX4BfMYJnVJkPTAcANaYQLE2SYw',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": null
//         //         },

//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2010/05/skunk-in-grass-800x600.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'https://wallpaperscraft.com/image/cat_face_glasses_thick_65455_800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxL8lW4qusbC1tLyZsmOmfsgHgZptUDPGS1f8XTW0Ruc8Ym3vQw',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'https://i.kinja-img.com/gawker-media/image/upload/s---9Tu2Cp6--/c_scale,f_auto,fl_progressive,q_80,w_800/18mfysetb5mtsjpg.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         },


//         //         {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en.html',
//         //             "Title": 'Discovery',
//         //             "Image": 'http://weiw.lightshedder.com/Landscape-Wildlife/Space-Coast-2012/i-6ptBK4z/0/L/IMG5278-L.jpg',
//         //             "Description": 'Spanish adventurer Frank Cuesta traces the steps of legendary explorer, David Livingstone, as he travels to Africa on a quest to explore the natural diversity of the region.',
//         //             "CatalogueName": 'Section B - Hydraulic Hose',
//         //             "ProductName": 'Africa',
//         //             "CatalogueDate": '20170906',
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/river-monsters.html',
//         //             "Title": 'River Monsters',
//         //             "Image": 'http://michaelcommon.com/wp-content/uploads/2015/11/PetPortrait_000-800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds.',
//         //             "CatalogueName": "Section B - Hydraulic Hose",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170906",
//         //             "CataloguePDF": "20bfbf6773bb4b72804e615d1e59bae0"
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/breaking-point.html',
//         //             "Title": 'Breaking Point: Commando School Belgaum',
//         //             "Image": 'http://vuing.com/wp-content/uploads/2016/02/amazing-photography-internet-favorite-picture-best-National-Geographic-photos-2015-5-800x600.jpg',
//         //             "Description": 'SHOWS',
//         //             "CatalogueName": "Section A - Technical Data",
//         //             "ProductName": "Hydraulic",
//         //             "CatalogueDate": "20170903",
//         //             "CataloguePDF": null
//         //         }, {
//         //             "Url": 'http://www.discoverychannel.co.in/in/en/shows/destroyed-in-seconds.html',
//         //             "Title": 'Destroyed in Seconds',
//         //             "Image": 'http://vuing.com/wp-content/uploads/2016/09/amazing-photo-caimain-butterflies-drinking-tears-flower-cowan-1-800x600.jpg',
//         //             "Description": 'Ron Pitts brings you clips of the most shocking destructions, caught on tape. From the well orchestrated implosion of the iconic Las Vegas Dunes Hotel to terror attacks on an Israeli market place, no topic is too trivial or taboo on Destroyed in Seconds. Explore what leads up to such destruction and how families and communities bounce back from devastation.',
//         //             "CatalogueName": "Section I - Industrial Hose",
//         //             "ProductName": "Industrial",
//         //             "CatalogueDate": "20170907",
//         //             "CataloguePDF": null
//         //         }
//         //     ]
//         // }
//         category: dataJson,
//         filterResult: [],
//         result: [],
//         // result: {},
//         selectedVal: '',
//         lastSelectedVal: '',
//         elementLoaded: '',
//         pageLoad: ''
//     },

//     created: function() {
//         // this.fetchCategoryData();
//         this.result = this.category.Results;

//         this.elementLoaded = this.result.length;
//         this.pageLoad = this.category.PageCount;
//         this.selectedVal = this.category.Filter[0];
//         this.getFiltered();
//     },

//     watch: {
//         // currentBranch: 'fetchCategoryData'
//         selectedVal: function() {
//             this.getFiltered();
//             this.lastSelectedVal = this.selectedVal;
//         } //, 
//         // result: function(resultItems) {
//         //     this.resultCounter();
//         //     this.elementLoaded = resultItems.length;
//         // }
//     },

//     // filters: {
//     //     formatDate: function (date) {
//     //         return date.substring(0,4) + ' / ' + date.substring(4,6) + ' / ' + date.substring(6);
//     //     }
//     // },

//     methods: {
//         // fetchCategoryData: function() {
//         //     var xhr = new XMLHttpRequest();
//         //     var self = this;
//         //     xhr.open('GET', apiURL);

//         //     xhr.onload = function() {
//         //         self.commits = JSON.parse(xhr.responseText);
//         //     };

//         //     xhr.send();
//         // }
//         getFiltered: function() {
//                 this.filterResult = [];
//                 var itemCount = 0;
//                 if (this.selectedVal === this.lastSelectedVal) {
//                     this.pageLoad = 0;
//                 }

//                 if (this.selectedVal ===  this.category.Filter[0] || this.selectedVal  === undefined) {
//                     this.filterResult = this.category.Results;
//                     this.elementLoaded = this.category.Results.length;

//                 } else {
//                     for (var i = 0; i < this.category.Results.length; i++) {

//                         if (this.category.Results[i].ProductName === this.selectedVal) {

//                             this.filterResult.push(this.category.Results[i]);
//                             // this.result[itemCount]=(this.category.Results[i]);
//                             itemCount++;
//                         }
//                     }
                   
//                     this.elementLoaded = itemCount;
//                 }
                
//                 if (this.lastSelectedVal != this.selectedVal || this.selectedVal  === undefined) {
//                         this.pageLoad = this.category.PageCount;
//                         this.result = this.filterResult.slice(0, this.category.PageCount);
//                     } else {
//                         this.result = this.filterResult.slice(0, this.pageLoad);
//                     }

//             } //,
//             // resultCounter:function(){
//             //     // this.elementLoaded =  this.result.length;
//             // }
//             ,
//         loadMore: function() {
//             if (this.pageLoad < this.elementLoaded) {
//                 this.pageLoad = this.pageLoad + this.category.PageCount;
//             }


//             this.result = this.filterResult.slice(0, this.pageLoad);

//             // this.getFiltered();
//         }


//     },

//     computed: {

//         uniqueNames: function() {
//             var filtered_array = [];
//             for (var i = 0; i < this.category.Results.length; i++) {
//                 if (filtered_array.indexOf(this.category.Results[i].ProductName) === -1) {
//                     filtered_array.push(this.category.Results[i].ProductName)
//                 }
//             }

//             return filtered_array;
//         }
//     }

// });