//
//  AudioPlayer.m
//  IndoorMap
//
//  Created by Cyril Agosta on 17/02/16.
//  Copyright © 2016 Estimote, Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "AudioPlayer.h"
#import <AVFoundation/AVFoundation.h>
@implementation AudioPlayer : NSObject

- (void)start
{
    
    NSURL *url = [NSURL URLWithString:@"http://192.168.1.45/hls-cdn/index.m3u8"];
    self.player = [AVPlayer playerWithURL:url];
    [self.player play];
    
}



@end