'use strict';

function ShoppingCartService ($http) {
    const vm = this;
    
    vm.getAllItems = () => {
        return $http ({
            url: '/shopping-cart',
            method: 'GET'
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        });
    }
}

angular.module('app').service('ShoppingCartService', ShoppingCartService);