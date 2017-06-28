export function getOffsetTop( elements ){
	var top = elements.offsetTop;
	var parent = elements.offsetParent;

	while( parent != null ){
		top += parent.offsetTop;
		parent = parent.offsetParent;
	};

	return top;
};

export function getOffsetLeft( elements ){
	var left = elements.offsetLeft;
	var parent = elements.offsetParent;

	while( parent != null ){
		left += parent.offsetLeft;
		parent = parent.offsetParent;
	};

	return left;
};

export function test () {
	alert ( "hey" )
}

export function strToSecond ( str ) {
	var str_arr = str.split ( ":" );

	var Second = parseFloat ( str_arr[ str_arr.length - 1 ] );

	if ( str_arr.length > 1 ) {
		Second += parseFloat ( str_arr[ str_arr.length - 2 ] ) * 60;	

		if ( str_arr.length > 2 ) {
			Second += parseFloat ( str_arr[ str_arr.length - 3 ] ) * 3600;
		}
	}

	return Second;
}

/*export function myAnimation ( source: any, target: any, fps: number, duration: number ) {
	for ( var i in source ) {
		if ( !target[ i ] ) {
			alert ( "target error" );
			return; 
		}
		else if ( target[ i ] === source[ i ] ) {
			continue;
		}
		else {
			let time_per_fps = 1000 / fps;
			let distance_per_fps = Math.abs ( target[ i ] - source[ i ] ) / ( duration / time_per_fps );

			if ( target[ i ] > source[ i ]  ) {
				var interval = setInterval ( ()=>{
				   source[ i ] += distance_per_fps;

				   if ( source[ i ] >= target[ i ] ) {
				     source[ i ] = target[ i ];
				     clearInterval ( interval ); 
				   }
				}, time_per_fps );
			}
			else {
				var interval = setInterval ( ()=>{
				   source[ i ] -= distance_per_fps;

				   if ( source[ i ] <= target[ i ] ) {
				     state_save.state = position;
				     clearInterval ( state_save.interval ); 
				   }
				}, time_per_fps )
			}
		}
	}
}*/