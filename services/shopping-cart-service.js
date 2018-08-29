'use strict';

function ShoppingCartService ($http) {
    const vm = this;
    
    vm.getShoppingCart = () => {
        return $http ({
            url: '/shopping-cart',
            method: 'GET'
        }).then((response) => {
            vm.cart = response;
            return vm.cart;
        });
    }
}

angular.module('app').service('ShoppingCartService', ShoppingCartService);