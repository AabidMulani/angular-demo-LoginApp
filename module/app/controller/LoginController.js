angular.module('app').controller('LoginController',function($scope,$location,HttpTestFactory){
   
    console.log("I m in LoginController");
    
    HttpTestFactory.getHttpData().then(function(response){
        console.log(response.data);
        $scope.receivedData = response.data;
    });
    
    
    $scope.onAddClicked = function(){
        
        $scope.receivedData.push({
            name: $scope.send.ngName,
            id: $scope.send.ngAge
        });
        
    };
    
    
    $scope.onSubmitClicked = function(){
      console.log("Im Clicked");  
        console.log($scope.send);
    

        HttpTestFactory.postHttpData($scope.send).then(function(response){
            console.log(response.status);
        });

    };
    
    
    
    $scope.onDeleteClicked = function(){
        console.log("I m in delete");
        console.log($scope.send);

        HttpTestFactory.delHttpData($scope.send.ngName).then(function(response){
            console.log(response.status);
        });

    };
    
    
    $scope.onPutClicked = function(){
        console.log("I m in Put Clicked");
        console.log($scope.send);

        HttpTestFactory.putHttpData($scope.send).then(function(response){
            console.log(response.status);
        });

    };
    
    
    
});