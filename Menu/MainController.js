app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
  $scope.extras =[
    {
      name: 'hush puppies',
      description: 'fried cornbread balls',
      price: 9
    },
    {
      name: 'tofu',
      description: 'tofu steamed with special house sauce',
      price: 6,
    },
    {
      name: 'calamari',
      description: 'fried squid bites',
      price: 5
    }
  ];
  $scope.mains = [
     {
      name: 'Capricciosa',
      description: 'Ketchup, cheese, mushrooms, paprika, olives, spices.',
      price: 11.25
    },
    {
      name: 'Funghi',
      description: 'Ketchup, cheese, mushrooms, oregano, olives.',
      price: 11.95
    },
    {
      name: 'Margharita',
      description: 'Ketchup, cheese, oregano, olives.',
      price: 9.15
    }
  ];

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
    name: 'Bruschetta',
    description: 'Grilled bread garlic, tomatoes, olive oil',
    price: 4.95
    }
  ];
}]);