//
//  AudioPlayer.h
//  IndoorMap
//
//  Created by Cyril Agosta on 17/02/16.
//  Copyright © 2016 Estimote, Inc. All rights reserved.
//

#ifndef AudioPlayer_h
#define AudioPlayer_h

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

@interface AudioPlayer : NSObject {
    // no instance variables
    
}
@property AVPlayer *player;
@property AVPlayerItem *playerItem;
// methods
- (void)start;

@end

#endif /* AudioPlayer_h */
