Vue.component('footer-component', {
    template: `<div class="footer-copyright text-center py-3 mt-5">© 2022 Copyright by Muhammad Khifransyah A M & Salman Affandi Yusuf</div>`
})
var vm = new Vue({
    el:'#app',
    data: {
        isShowingCart: false,
        cart: {
            items: []
        },
        search: '',
        shoes: [
            {
                id: 1,
                name: 'Brook Cascadia',
                price: 130,
                inStock: 100,
                description: 'Latest model is competitively light yet stable.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Brooks%20Cascadia%2016%20trail%20running%20shoe.jpeg'
            },
            {
                id: 2,
                name: 'Salomon X Ultra 4',
                price: 150,
                inStock: 100,
                description: 'A ideal balance of weight and on-trail performance.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Salomon%20X%20Ultra%204%20GTX%20hiking%20shoes.jpg'
            },
            {
                id: 3,
                name: 'Scarpa Rush Low',
                price: 169,
                inStock: 100,
                description: 'Trail runner-like agility with a boost in protection and stability.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Scarpa%20Rush%20Low%20GTX%20hiking%20shoe.jpeg'
            },
            {
                id: 4,
                name: 'Altra Lone Peak',
                price: 140,
                inStock: 100,
                description: 'It’s a thru-hiker favorite thanks to its light feel, and cushioning.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Altra%20Lone%20Peak%206%20hiking%20shoe.jpeg'
            },
            {
                id: 5,
                name: 'Hoka One',
                price: 145,
                inStock: 100,
                description: 'Plush cushioning makes these shoes extremely comfortable.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Hoka%20One%20One%20Speedgoat%204%20trail%20runner.jpg'
            },
            {
                id: 6,
                name: 'Danner Trail 2650',
                price: 170,
                inStock: 100,
                description: 'Comfortable, grippy, and looks good for use around town.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/Danner%202650%20Trail%20hiking%20shoe.jpg'
            },
            {
                id: 7,
                name: 'Adidas Terrex Swift',
                price: 150,
                inStock: 100,
                description: 'Sturdy and durable with great traction and best durability.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Adidas%20Terrex%20Swift%20R3%20GTX%20hiking%20shoe.jpg'
            },
            {
                id: 8,
                name: 'Oboz Sypes Low',
                price: 145,
                inStock: 100,
                description: 'Like the Danner Trail, this is a good-looking hiking shoe with everyday.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Oboz%20Sypes%20Low%20Leather%20Waterproof%20hiking%20shoes.jpg'
            },
            {
                id: 9,
                name: 'La Sportiva Wildcat',
                price: 120,
                inStock: 100,
                description: 'Lightweight but stable; long-distance comfort with best durability.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/La%20Sportiva%20Wildcat%20hiking%20shoe.jpg'
            },
            {
                id: 10,
                name: 'Salomon Outline GTX',
                price: 130,
                inStock: 100,
                description: 'Light and modern with a running shoe-like feel for hike.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Salomon%20OUTline%20Low%20GTX%20hiking%20shoe_0.jpg'
            },
            {
                id: 11,
                name: 'Hoka One Anacapa',
                price: 180,
                inStock: 100,
                description: 'Extremely comfortable, great lacing system and fit, and smooth ride.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Hoka%20One%20One%20Anacapa%20Mid%20GTX%20hiking%20boot.jpeg'
            },
            {
                id: 12,
                name: 'Lowa Renegade GTX',
                price: 245,
                inStock: 100,
                description: 'Light and comfortable; enough support for most backpackers.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Lowa%20Renegade%20GTX%20Mid%20hiking%20boot.jpg'
            },
            {
                id: 13,
                name: 'La Sportiva Ultra',
                price: 175,
                inStock: 100,
                description: 'Excellent stability and durability in a light, trail runner-like design.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/La%20Sportiva%20Ultra%20Raptor%20II%20Mid%20GTX%20hiking%20boot.jpeg'
            },
            {
                id: 14,
                name: 'Altra Lone Peak GTX',
                price: 170,
                inStock: 100,
                description: 'The comfort and mobility of a trail running shoe with added ankle support.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Altra%20Lone%20Peak%20ALL-WTHR%20Mid%20hiking%20boot.jpeg'
            },
            {
                id: 15,
                name: 'Oboz Bridger',
                price: 180,
                inStock: 100,
                description: 'Sturdy and supportive for the price; quality insole included.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/Oboz%20Bridger%20Mid%20BDry%20hiking%20boot.jpg'
            },
            {
                id: 16,
                name: 'La Sportiva Nucleo',
                price: 209,
                inStock: 100,
                description: 'Light, pretty tough, and comfortable with best durability.',
                picture: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Boots/La%20Sportive%20Nucleo%20High%20II%20GTX%20hiking%20boot.jpg'
            }
        ] 
    },
    computed: { 
            cartTotal: function() {
                var total = 0;
                this.cart.items.forEach(function(item) {
                total += item.quantity * item.shoe.price;
                });
                return total;
            },
            taxAmount: function() {
                return this.cartTotal * 10 / 100;
            },
            filterProduks() {
              return this.shoes.filter((shoe)=>{
                 return shoe.name.includes(this.search)
            })
        }
    },
    filters: {
        currency: function(value) {
          var formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
          });
          return formatter.format(value);
        }
    },
    methods:{
        removeItemFromCart: function(cartItem) {
          var index = this.cart.items.indexOf(cartItem);
          
          if (index !== -1) {
            this.cart.items.splice(index, 1);
          }
        },
        checkout: function() {
            if (confirm('Are you sure that you want to purchase these products?')) {
              this.cart.items.forEach(function(item) {
                item.shoe.inStock += item.quantity;
              });
              
              this.cart.items = [];
            }
        },
        addProductToCart: function(shoe) {
            var cartItem = this.getCartItem(shoe);
            
            if (cartItem != null) {
              cartItem.quantity++;
            } else {
              this.cart.items.push({
                shoe: shoe,
                quantity: 1
              });
            }
            shoe.inStock--;
        },
        increaseQuantity: function(cartItem) {
            cartItem.shoe.inStock--;
            cartItem.quantity++;
        },
        decreaseQuantity: function(cartItem) {
            cartItem.quantity--;
            cartItem.shoe.inStock++;
            if (cartItem.quantity == 0) {
              this.removeItemFromCart(cartItem);
            }
        },
        getCartItem: function(shoe) {
            for (var i = 0; i < this.cart.items.length; i++) {
              if (this.cart.items[i].shoe.id === shoe.id) {
                return this.cart.items[i];
              }
            }
            
            return null;
        }
    }
})