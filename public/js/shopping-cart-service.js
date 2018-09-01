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

    vm.addItem = (newItem) => {
        return $http ({
            url: '/shopping-cart',
            method: 'POST',
            data: newItem
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        });
    }

    vm.updateQuantity = (newItem) => {
        return $http ({
            url: '/shopping-cart/' + newItem.id,
            method: 'PUT',
            data: newItem
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        });
    }

    vm.deleteItem = (id) => {
        return $http ({
            url: '/shopping-cart/' + id,
            method: 'DELETE'
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        });
    }
}

angular.module('app').service('ShoppingCartService', ShoppingCartService);