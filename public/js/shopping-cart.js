'use strict';

const shoppingCart = {
    template: `
        <section ng-repeat="item in $ctrl.cart">
        <p> {{ $ctrl.item.product }} </p>
        <p> {{ $ctrl.item.price }} </p>
        <p> {{ $ctrl.item.quantity }} </p>
        <button ng-click="$ctrl.getShoppingCart();">Get Cart</button>
        </section>
    `,
    contoller: ['ShoppingCartService', function(ShoppingCartService) {
        const vm = this;

        ShoppingCartService.getShoppingCart().then((response) => {
            vm.console.log(response.data);
            vm.cart = response.data;
        });
    }]
}

angular.module('app').component('shoppingCart', shoppingCart);