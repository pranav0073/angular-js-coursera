(function () {
'use strict';

angular.module('ShoppingCart', [])
.controller('ToBuyList', ToBuyListController)
.controller('AlreadyBoughtList', AlreadyBoughtListController)
.service('ShoppingLogicService',ShoppingLogicService);


ToBuyListController.$inject = ['ShoppingLogicService'];
function ToBuyListController(ShoppingLogicService){
  var list1 = this;
  list1.items = ShoppingLogicService.getItemsToBuy();
  list1.buy = function(index){
    ShoppingLogicService.buyItem(index);
  }
  list1.listSize = list1.items.length;

}

AlreadyBoughtListController.$inject = ['ShoppingLogicService'];
function AlreadyBoughtListController(ShoppingLogicService){
  var list2 = this;
  list2.items = ShoppingLogicService.getItemsBought();
  list2.listSize = list2.items.length;
}

function ShoppingLogicService(){

  var service = this;
  var itemsToBuy =[
    {
      name: 'Cake',
      quantity : 5
    },
    {
      name: 'Tandoori Chicken',
      quantity : 5
    },
    {
      name: 'Medium Pizza',
      quantity : '2'
    },
    {
      name : 'Coffee',
      quantity : '4'
    },
    {
      name : 'water bottle',
      quantity : '10'
    }

  ];
    var itemsBought = [];
    service.buyItem = function(index){
        itemsBought.push(itemsToBuy[index]);
        itemsToBuy.splice(index,1);

    }
    service.getItemsToBuy = function(){
      return itemsToBuy;
    };
    service.getItemsBought = function(){
      return itemsBought;
    };

  }

})();
