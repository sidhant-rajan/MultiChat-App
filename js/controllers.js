app.controller('chatController',
    function ($scope,$sce) {
		var current = 1;
        $scope.boxes=Array();
		$scope.msg ="";
		$scope.msghtml = "";
		$scope.writing = "";
	$scope.addBox = function(){
		var id = current;
		current++;
		$scope.boxes.push(id);
	}
    $scope.sendMsg=function(msgtmp,box){
		$scope.msg += msgtmp +" from box"+box+"<br>";
		$scope.msghtml=$sce.trustAsHtml($scope.msg);
		
	}
	$scope.setWriting=function(box){
		$scope.writing = "Box-"+box+" is typing.....";
	}
	$scope.unsetWriting=function(box){
		$scope.writing = "";
	}
	$scope.deleteBox=function(box){
		var index = $scope.boxes.indexOf(box);
		$scope.boxes.splice(index, 1);
	}
    
});

