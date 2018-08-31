'use strict';

const shoppingCart = {
    template: `
    <section class="section__container">
        <h1>Your cart</h1><img src="cart.png"></img>
        <section class="section__line"></section>
        <form ng-submit="$ctrl.addItem(newItem);">
            <input type="text" ng-model="newItem.product" required placeholder="item">
            <input type="number" ng-model="newItem.price" required placeholder="price">
            <input type="number" ng-model="newItem.quantity" required placeholder="quantity">
            <button>Add Item</button>
        </form>
        <section class="section__item" ng-repeat="item in $ctrl.cartItems track by $index">
        <p> {{ item.product }} </p>
        <p ng-mouseover="showButton = true" ng-mouseleave="showButton = false" ng-init="showButton = false">
            Quanity: {{ item.quantity }} <input class="input__update-quantity" type="number" ng-model="item.quantity" ng-show="showButton">
        <button type="button" ng-show="showButton" ng-click="$ctrl.updateQuantity(item);">update</button></p>
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

        vm.addItem = (newItem) => {
            ShoppingCartService.addItem(newItem).then((response) => {
                vm.cartItems = response;
                return vm.cartItems;
            });
        }

        vm.updateQuantity = (newItem) => {
            ShoppingCartService.updateQuantity(newItem).then((response) => {
                vm.cartItems = response;
                return vm.cartItems;
            })
        }
    }]
}

angular.module('app').component('shoppingCart', shoppingCart);