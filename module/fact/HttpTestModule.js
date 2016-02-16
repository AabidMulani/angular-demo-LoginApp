var factModule = angular.module('HttpTestModule',[]).factory('HttpTestFactory',function($http){
    
    function getHttpData(){
      return $http.get("data/dummy.json");  
    };
    
    
    function postHttpData(data){
      return $http.post("data/dummy.json",data);  
    };
    
    function delHttpData(data){
      return $http.delete("data/dummy.json",{
          params: {
            name: data
          }
      });  
    };
    
    function putHttpData(data){
      return $http.put("data/dummy.json",data,{
          params: {
            name: data.ngName
          }
      });  
    };
    
    
    
    return { 
        getHttpData: getHttpData,
        postHttpData: postHttpData,
        delHttpData: delHttpData,
        putHttpData: putHttpData
    };
});