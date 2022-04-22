Vue.component('footer-component', {
    template: `<div class="footer-copyright text-center py-3 mt-5">© 2022 Copyright by Muhammad Khifransyah A M & Salman Affandi Yusuf</div>`
})
var vm = new Vue({
    el:'#app',
    data: {
        search: '',
        shoes: [
            {
                id: 1,
                title: 'Brook Cascadia',
                price: 130,
                desc: 'Latest model is competitively light yet stable.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Brooks%20Cascadia%2016%20trail%20running%20shoe.jpeg'
            },
            {
                id: 2,
                title: 'Salomon X Ultra 4',
                price: 150,
                desc: 'A ideal balance of weight and on-trail performance.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Salomon%20X%20Ultra%204%20GTX%20hiking%20shoes.jpg'
            },
            {
                id: 3,
                title: 'Scarpa Rush Low',
                price: 169,
                desc: 'Trail runner-like agility with a boost in protection and stability.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Scarpa%20Rush%20Low%20GTX%20hiking%20shoe.jpeg'
            },
            {
                id: 4,
                title: 'Altra Lone Peak',
                price: 140,
                desc: 'It’s a thru-hiker favorite thanks to its light feel, and cushioning.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Altra%20Lone%20Peak%206%20hiking%20shoe.jpeg'
            },
            {
                id: 5,
                title: 'Hoka One',
                price: 145,
                desc: 'Plush cushioning makes these shoes extremely comfortable.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Hoka%20One%20One%20Speedgoat%204%20trail%20runner.jpg'
            },
            {
                id: 6,
                title: 'Danner Trail 2650',
                price: 170,
                desc: 'Comfortable, grippy, and looks good for use around town.',
                image: 'https://www.switchbacktravel.com/sites/default/files/Danner%202650%20Trail%20hiking%20shoe.jpg'
            },
            {
                id: 7,
                title: 'Adidas Terrex Swift',
                price: 150,
                desc: 'Sturdy and durable with great traction and best durability.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Adidas%20Terrex%20Swift%20R3%20GTX%20hiking%20shoe.jpg'
            },
            {
                id: 8,
                title: 'Oboz Sypes Low',
                price: 145,
                desc: 'Like the Danner Trail, this is a good-looking hiking shoe with everyday.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Oboz%20Sypes%20Low%20Leather%20Waterproof%20hiking%20shoes.jpg'
            },
            {
                id: 9,
                title: 'La Sportiva Wildcat',
                price: 120,
                desc: 'Lightweight but stable; long-distance comfort with best durability.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/La%20Sportiva%20Wildcat%20hiking%20shoe.jpg'
            },
            {
                id: 10,
                title: 'Salomon Outline GTX',
                price: 130,
                desc: 'Light and modern with a running shoe-like feel for hike.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Salomon%20OUTline%20Low%20GTX%20hiking%20shoe_0.jpg'
            },
            {
                id: 11,
                title: 'Hoka One Anacapa',
                price: 180,
                desc: 'Extremely comfortable, great lacing system and fit, and smooth ride.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Hoka%20One%20One%20Anacapa%20Mid%20GTX%20hiking%20boot.jpeg'
            },
            {
                id: 12,
                title: 'Lowa Renegade GTX',
                price: 245,
                desc: 'Light and comfortable; enough support for most backpackers.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Lowa%20Renegade%20GTX%20Mid%20hiking%20boot.jpg'
            },
            {
                id: 13,
                title: 'La Sportiva Ultra',
                price: 175,
                desc: 'Excellent stability and durability in a light, trail runner-like design.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/La%20Sportiva%20Ultra%20Raptor%20II%20Mid%20GTX%20hiking%20boot.jpeg'
            },
            {
                id: 14,
                title: 'Altra Lone Peak GTX',
                price: 170,
                desc: 'The comfort and mobility of a trail running shoe with added ankle support.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Altra%20Lone%20Peak%20ALL-WTHR%20Mid%20hiking%20boot.jpeg'
            },
            {
                id: 15,
                title: 'Oboz Bridger',
                price: 180,
                desc: 'Sturdy and supportive for the price; quality insole included.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Oboz%20Bridger%20Mid%20BDry%20hiking%20boot.jpg'
            },
            {
                id: 16,
                title: 'La Sportiva Nucleo',
                price: 209,
                desc: 'Light, pretty tough, and comfortable with best durability.',
                image: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/La%20Sportive%20Nucleo%20High%20II%20GTX%20hiking%20boot.jpg'
            }
        ] 
    },
    computed: { 
            filterProduks() {
              return this.shoes.filter((shoe)=>{
                 return shoe.title.includes(this.search)
            })
        }
    }
})