    angular.module('discovery', ['cui','ngTable','ngTagsInput'])
      .controller('DiscoveryController', function($scope,cuiDataSourceService,$http) {
	  
		$scope.setEnableRetryButton = function(val){
			$scope.enableRetryButton = val;
		};
		
		//for user api information
		$scope.formFields = {};
		
		//to store the status of each host whether user entered api is matched/valid or not.
		$scope.userAPIStatus={};
		
		//To check if user has entered all api's for host or not. If any one of them is not entered, form is invalid
		$scope.isFormValid='';
		
		//To check if all host api's entered are valid. If yes, then only show next button.
		$scope.instancesMatched='false';
		
		$scope.cyEdges=[];
		$scope.cyNodes=[];
		$scope.eSource='';
		$scope.streams=[];
		$scope.variable=[]; 
		
		
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
			
			
			$scope.readAPIKeys = function(){
				console.log("read api keys");
			 var searchAPIData = $http.get('data/APIKeys.json');
			 
			 
			 searchAPIData.success(function(data) {
			    	
					$scope.apiResults= data;
					angular.forEach($scope.apiResults, function(value, key) {
					
			});
			
			    	
				}); //end of success reading json file
			    
				searchAPIData.error(function() {
					console.log("Error in search data");
				}); //Error in reading json file

				
			}//end of readAPIKeys method
			
			
			$scope.getUserEnteredHostAPI = function(hostApis){
	
			
			angular.forEach(hostApis, function(value, key) {
			
			});
		
			
		 } //end of getUserEnteredHostAPI method
		 
		 $scope.compareAPI = function(hostApis){
		 
		 	 var searchAPIData = $http.get('data/APIKeys.json');
			 $scope.apiResults='';
			 
			 $scope.tempArray=[];
			 searchAPIData.success(function(data) {
			    	
					$scope.apiResults= data;
					console.log("$scope.apiResults "+ $scope.apiResults);
					angular.forEach($scope.apiResults, function(value, key) {
				
			});
				 //host api for loop
		 angular.forEach(hostApis, function(hostAPI, hostkey) {
				
				angular.forEach($scope.apiResults, function(userAPI, userKey) {
				
					if(userAPI.instance_id===hostkey && hostAPI==userKey){
					
						console.log("match done");
						hostApis[hostkey].status='true';
						$scope.formFields[hostkey].status='true';
						$scope.userAPIStatus[hostkey]='true';
						
		
						$scope.tempArray.push(hostkey);
					}else{
						console.log("match not done");
						hostApis[hostkey].status='false';
						$scope.formFields[hostkey].status='false';
						if($scope.userAPIStatus[hostkey]===''){
						$scope.userAPIStatus[hostkey]='false';
						}
					}
				
				});
			
			
			
			}); //end of outer for loop
			
			$scope.hostAPICounter=0;
			 angular.forEach(hostApis, function(hostAPI, hostkey) {
					
			$scope.hostAPICounter++;
			 
			 });
				
				if($scope.hostAPICounter===$scope.tempArray.length){
				$scope.instancesMatched='true';
		
				}else{
				$scope.instancesMatched='false';
		
				}
			}); //end of success reading json file
		 
		 };
		 
		
	
		 	$scope.readModelsJson = function(){
			console.log("read models keys");
			var streamsData = $http.get('data/streams.json');
			 
			
			 streamsData.success(function(data) {
			    	
					$scope.streamResult= data;
					angular.forEach($scope.streamResult.instances_found, function(value, key) {
					
					$scope.cyNodes.push({'id':value.id,'name':value.name});
				
					
			});
			
			
				angular.forEach($scope.streamResult.streams_found, function(value, key) {
					
					console.log("---streams_found----");
					console.log("key : " + key);
					console.log("value : "+ value);
					$scope.streams.push({'key':key,'value':value});
					$scope.cyEdges.push({'source':value.source,'target':value.target,'alarms':value.alarms});
				//	$scope.cyNodes[value.source]=value.target;
						
					
			}); 
			
				
			    	
				}); //end of success reading json file
			    
				streamsData.error(function() {
					console.log("Error in stream data");
				}); //Error in reading json file

				
			};//end of readModelsJson method
			
			$scope.cytoscapeFunction = function(){
			
			console.log("in cytoscape function------")	;
			//$scope.elements = {};
            // $scope.elements.nodes = [];
           //   $scope.elements.edges = [];
			  $scope.TempNodesVariable =[];
			  
			  $scope.final_elements=[];
			  
			  
		
		
		
			 // parse data and create the Nodes array
          			  for (i=0; i<Object.keys($scope.cyNodes).length; i++)
                {
			
		
			  
                    // get id, name from the object
                    var dId = $scope.cyNodes[i].id;
                    var dName = $scope.cyNodes[i].name;
                
                    var elementObj = {
                       data:{
                            id:dId,
                            name:dName,
                        
                    }};
					
					$scope.TempNodesVariable.push(elementObj);
					//console.log("TempNodesVariable : " +$scope.TempNodesVariable +" elm obj: " + elementObj);
                    // add new object to the Nodes array
                 //   $scope.elements.nodes.push(elementObj);
                }
			//	console.log( " $scope.elements.nodes:      "+$scope.elements.nodes);
                
		console.log("TempNodesVariable : " +$scope.TempNodesVariable.length);
				// number of models included in streams_found
			  for (i=0; i<$scope.streams.length; i++){
			  
			  
				$scope.elements = {};
             $scope.elements.nodes = [];
              $scope.elements.edges = [];
			  
			   for (k=0; k<$scope.TempNodesVariable.length; k++){
			    $scope.elements.nodes.push($scope.TempNodesVariable[k]);
				}
					//Inner loop for getting individual replication model and drawing it in table
					for (j=0; j<$scope.streams[i].value.length; j++){
						 
				    // get edge source
                    var eSource = $scope.streams[i].value[j].source;
					console.log("eSource:----- "+eSource);
                    // get edge target
                    var eTarget = $scope.streams[i].value[j].target;
					console.log("eSource:----- "+eTarget);
					
                    // get edge alarms
                  var alarm =$scope.streams[i].value[j].alarms;
				  console.log("alarm: " + alarm);
				  
                    // build the edge object
                    var edgeObj = {
                        data:{
                        alarms:alarm,
                        source:eSource,
                        target:eTarget
                        }
                    };
                    // adding the edge object to the edges array
                    $scope.elements.edges.push(edgeObj);
					
					
				} //end of inner loop	
					
					console.log("$scope.elements.edges  " + $scope.elements.edges.length);
					console.log("$scope.elements.nodes  " + $scope.elements.nodes.length);
					$scope.final_elements.push($scope.elements);
					console.log("$scope.final_elements: "+ $scope.final_elements);
					//console.log("beofre $scope.final_elements : "+ $scope.final_elements[i].edges.length);
			
						
					
			  } //end of outer loop of total number of replication streams found

			console.log("$scope.final_elements total nodes: "+ $scope.final_elements[2].nodes);
			console.log("$scope.final_elements total edges: "+ $scope.final_elements[2].edges);
			
			  for (k=0; k<$scope.final_elements.length; k++){
			$scope.drawReplicationModel(k);
			}
	}; //end of cytoscape function  
		 
		

		$scope.drawReplicationModel = function(k){

		$('#table'+k).cytoscape({
			style : cytoscape.stylesheet().selector('node').css({
				'content' : 'data(name)',
				'text-valign' : 'center',
				'color' : 'white',
				'shape' : 'rectangle',
				'text-outline-width' : 2,
				'text-outline-color' : '#888',
				'background-image' : 'images/DataNode.png',
				'background-fit' : 'cover'

			}).selector('edge').css({
				'target-arrow-shape' : 'triangle',
				'target-arrow-color' : 'blue',
				'line-color' : 'blue',
				'line-style' : 'solid',
				'source-arrow-color' : 'blue',
				'source-arrow-fill' : 'filled'
			}).selector(':selected').css({
				'background-color' : 'black',
				'line-color' : 'black',
				'target-arrow-color' : 'black',
				'source-arrow-color' : 'black'
			}).selector('.faded').css({
				'opacity' : 0.25,
				'text-opacity' : 0
			}).selector(":active").css({
				"overlay-color" : "black",
				"overlay-padding" : 10,
				"overlay-opacity" : 0.25
			}),

		
			layout : {
				name : 'cose',
				padding : 10
			},

			ready : function() {
				window.cy = this;

				cy.elements().unselectify();

				cy.$('edge[alarms < 60]').css({
					'target-arrow-color' : 'red',
					'source-arrow-color' : 'red',
					'line-color' : 'red'
				});

				cy.boxSelectionEnabled(false);
				cy.panningEnabled(true);
				cy.userPanningEnabled(true);
				cy.pan({
					x : 100,
					y : 100
				});

				cy.zoomingEnabled(true);

				cy.minZoom(0);
				cy.maxZoom(4);

				cy.on('tap', 'node', function(e) {
					var node = e.cyTarget;
					var neighborhood = node.neighborhood().add(node);

					cy.elements().addClass('faded');
					neighborhood.removeClass('faded');
				});

				cy.on('tap', 'edge', function(e) {
					//popup

					alert("alert as edge is clicked ");
				});

				cy.on('tap', function(e) {
					if (e.cyTarget === cy) {
						cy.elements().removeClass('faded');
					}
				});
				
				 console.log("$scope.elements------------nodes: " + $scope.elements.nodes);	
				 console.log("$scope.elements------------edges: " + $scope.elements.edges);	
				 console.log("$scope.final_elements : "+ $scope.final_elements[k].edges.length);
				 cy.load($scope.final_elements[k]);
			}
		});
						 
 
		}; //end of method
		
		$scope.addReplicationTags = function(tag){
		console.log("tag added" + tag.name);
		var a =[a]
		//if($.inArray(tag.name,$scope.replicationTags)==-1){
		//	console.log("not found then add");
		//$scope.replicationTags.push(tag);
	//	}
		};
		
		$scope.initialReplicationTags = function(){
		
		    $scope.tags = [
			{ text: 'Tag1' },
			{ text: 'Tag2' },
			{ text: 'Tag3' }
			];
		};
		
		
		$scope.selectedTags = [];
		$scope.check = function(tag){
        console.log(tag);
        $scope.selectedTags.push({text:tag});
     //   $scope.tags.push({text:tag});
        console.log($scope.selectedTags);
    };
    
    
    $scope.addToSelect = function(tag){
        $scope.tags.push(tag);
    }
    
    $scope.tagRemoved = function(tag){
        $scope.tags.pop(tag);
    }
    
    

		
});//end of controller
