import { Injectable } from '@angular/core';
import { getMockData } from './mockData/videoData';

@Injectable()
export class VideoService {

  constructor() { }

  getVideo () {
  	return getMockData ( 'video' );
  };

  getUser () {
	return getMockData ( 'user' );
  };

}
