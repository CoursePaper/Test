'use strict';

angular.module('webrtcServices', ['ngResource'])
.factory('feed',
	function($resource){
		return $resource(
			'/:Id',
			{Id:'@Id'},{'review': {'method':'GET',isArray:true}}
		);
	}
);