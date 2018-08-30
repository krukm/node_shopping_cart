'use strict';

const shoppingCart = {
    template: `
    <section class="section__container">
        <h1>Your cart</h1><img src="cart.png"></img>
        <section class="section__line"></section>
        <section class="section__item" ng-repeat="item in $ctrl.cartItems">
        <p> {{ item.product }} </p>
        <p> Quanity: {{ item.quantity }} </p>
        <p> Price: {{ item.price | currency}} </p>
        <p class="p__total"> Item total: {{ item.price * item.quantity | currency }} </p>
        </section>
    </section>
    `,
    controller: ['ShoppingCartService', function(ShoppingCartService) {
        const vm = this;

        ShoppingCartService.getAllItems().then((response) => {
            vm.cartItems = response;
        });
    }]
}

angular.module('app').component('shoppingCart', shoppingCart);