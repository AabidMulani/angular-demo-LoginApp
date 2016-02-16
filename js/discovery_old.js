    angular.module('discovery', ['cui'])
      .controller('DiscoveryController', function($scope,cuiDataSourceService,$http) {
	  
		$scope.setEnableRetryButton = function(val){
			$scope.enableRetryButton = val;
		};
		
		$scope.tabs = [
          {
            icon: 'dell-halo'
          },
		  //white line needed
          {
            icon : 'user'
          },
          {
            label: 'Shareplex Manager'
           
          },
          {
            label: 'Models'
           
          },
          {
            label: 'Discover'
           
          },
          {
            label: 'Instances'
           
          },
          {
            label: 'Rules'
           
          },
		  //white line needed
          {
            icon : 'user'
          },
          {
          
            icon: 'bell',
            badge: {
              type: 'gray',
              label: '9'
            }
            
          },
          {
            icon : 'user'
          }
        ]

        $scope.click = function() {
          alert('see!')
        }
		
		/*
		$scope.settings = {
			url : "data/tableData.json",
			id : 'id',
			displayChecks : true,
			columns : [{
				label : '',
				map : 'sign',
				},{
				label : 'Host',
				map : 'host',
				},{
				label : 'DataSource',
				map : 'ds',
				},{
				label : 'Port',
				map : 'port',
				},{
				label : 'IP Address',
				map : 'ip',
				}
			]
		}
		*/
		/*
		 $scope.columnCollection = [{
				label : 'Status',
				cellTemplateUrl: 'cellIcon.html'
				},{
				label : 'Host',
				map : 'host',
				},{
				label : 'DataSource',
				map : 'ds',
				},{
				label : 'Port',
				map : 'port',
				},{
				label : 'IP Address',
				map : 'ip',
				}
			]*/
			
			$scope.columnCollection = [{
			      //label: 'Status',
			      cellTemplateUrl: 'CellIconImpl.html'
			    }, {
			      //label: 'DataSource',
			      map: 'DataSource'
			    }, {
			      //label: 'targets',
			      map: 'targets'
			    }, {
			      //label: 'IP',
			      map: 'IP'
			    }, {
				  //label: 'PortNumber',
				   map: 'PortNumber'
				 }];
			
		cuiDataSourceService('data/NodeDiscovery.json').all().then(function(data) {
			$scope.rowCollection = data
			
		});
		
		$scope.globalConfig = {
          selectionMode: 'single',
          isPaginationEnabled: false,
          isGlobalSearchActivated: false,
          itemsByPage: 12,
          maxSize: 8
        };
		
		$scope.readNodeDiscoveryJsonInput = function(filePath) {
				console.log("in read json input function" + filePath);

					var searchData = $http.get(filePath);
				    searchData.success(function(data) {
				    	console.log(data);
				    	
				    	 $scope.searchResults= data;
				    	 console.log("search results-->"+$scope.searchResults);
				    	 
				    	 jQuery.each($scope.searchResults, function(i, val) {
						        console.log("value-->" + i);
						     });				    	 
				    	 
				    //To calculate instances discovered
				    $scope.instancesDiscovered = $scope.searchResults.nodes.length;
				    	 console.log("length:" +  $scope.instancesDiscovered);
				    	 
					$scope.connectionsValidated=0;
					$scope.connectionsFailed=0 ;
					//To calculate connections validated
					for ( var i = 0; i < $scope.instancesDiscovered; i++) {
					
						if ($scope.searchResults.nodes[i].status==='ok'){
							console.log("status insidee if " + $scope.searchResults.nodes[i].status);
							$scope.connectionsValidated++;
						}
						else if ($scope.searchResults.nodes[i].status==='fail'){
							console.log("status insidee if " + $scope.searchResults.nodes[i].status);
							$scope.connectionsFailed++;
						}
				     }
					
					console.log("data for loop " + $scope.connectionsValidated);

					}); //end of success reading json file
				    
					searchData.error(function() {
						console.log("Error in search data");
					}); //Error in reading json file

			} // end of readNodeDiscoveryJsonInput method
      });
