//
//  ViewController.swift
//  IndoorMap
//

import UIKit

class ViewController: UIViewController, EILIndoorLocationManagerDelegate {
    
    let locationManager = EILIndoorLocationManager()
    
    var location: EILLocation!
    
    
    @IBOutlet weak var locationView: EILIndoorLocationView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        self.locationManager.delegate = self
        
        let locationBuilder: EILLocationBuilder = EILLocationBuilder()
        locationBuilder.setLocationBoundaryPoints([
            EILPoint(x: 0, y: 0),
            EILPoint(x: 0, y: 3.71),
            EILPoint(x: 4.84, y: 3.71),
            EILPoint(x: 4.84, y: 0)
            ]);
        
        NSLog("Hello LocationBuilder \n");
        
        //BLUEBERRY 2
        locationBuilder.addBeaconWithIdentifier("eeeb103116b2", withPosition: EILOrientedPoint(x: 0, y: 1.67, orientation: 143))
        //BLUEBERRY 2
        //        locationBuilder.addBeaconWithIdentifier("eeeb103116b2",
        //                                                atBoundarySegmentIndex: 0,
        //                                                inDistance: 1.67,
        //                                                fromSide: .LeftSide
        //        )
        
        
        //MINT 1
        locationBuilder.addBeaconWithIdentifier("e3b05df00c70", withPosition: EILOrientedPoint(x: 3.08, y: 3.71, orientation: 233))
        //MINT 1
        //        locationBuilder.addBeaconWithIdentifier("e3b05df00c70",
        //                                                atBoundarySegmentIndex: 1,
        //                                                inDistance: 3.08,
        //                                                fromSide: .LeftSide
        //        )
        
        
        //ICE 2
        locationBuilder.addBeaconWithIdentifier("c350dfe2a606", withPosition: EILOrientedPoint(x: 0.88, y: 3.71, orientation: 233))
        //ICE 2
        //        locationBuilder.addBeaconWithIdentifier("c350dfe2a606",
        //                                                atBoundarySegmentIndex: 1,
        //                                                inDistance: 0.88,
        //                                                fromSide: .LeftSide
        //        )
        
        
        //BLUEBERRY 1
        locationBuilder.addBeaconWithIdentifier("da40b8bc0dcc", withPosition: EILOrientedPoint(x: 4.84, y: 2.08, orientation: 323))
        //BLUEBERRY 1
        //        locationBuilder.addBeaconWithIdentifier("da40b8bc0dcc",
        //                                                atBoundarySegmentIndex: 2,
        //                                                inDistance: 2.08,
        //                                                fromSide: .RightSide
        //        )
        
        
        //ICE 1
        locationBuilder.addBeaconWithIdentifier("cd12f3916744", withPosition: EILOrientedPoint(x: 2.75, y: 0, orientation: 53))
        //ICE 1
        //        locationBuilder.addBeaconWithIdentifier("cd12f3916744",
        //                                                atBoundarySegmentIndex: 3,
        //                                                inDistance: 2.75,
        //                                                fromSide: .LeftSide
        //        )
        
        //MINT 2
        locationBuilder.addBeaconWithIdentifier("d6aca1c590aa", withPosition: EILOrientedPoint(x: 1.38, y: 0, orientation: 53))
        //MINT 2
        //        locationBuilder.addBeaconWithIdentifier("d6aca1c590aa",
        //                                                atBoundarySegmentIndex: 3,
        //                                                inDistance: 1.38,
        //                                                fromSide: .LeftSide
        //        )
        
        
        locationBuilder.setLocationOrientation(53);
        self.location = locationBuilder.build()
        self.locationView.showTrace = true
        self.locationView.showWallLengthLabels = true
        self.locationView.rotateOnPositionUpdate = false
        
        self.locationView.drawLocation(location)
        self.locationManager.startPositionUpdatesForLocation(self.location)
    }
    
    func indoorLocationManager(manager: EILIndoorLocationManager!, didFailToUpdatePositionWithError error: NSError!) {
        print("failed to update position: \(error)")
    }
    
    func indoorLocationManager(manager: EILIndoorLocationManager!, didUpdatePosition position: EILOrientedPoint!, withAccuracy positionAccuracy: EILPositionAccuracy, inLocation location: EILLocation!) {
        var accuracy: String!
        switch positionAccuracy {
        case .VeryHigh: accuracy = "+/- 1.00m"
        case .High:     accuracy = "+/- 1.62m"
        case .Medium:   accuracy = "+/- 2.62m"
        case .Low:      accuracy = "+/- 4.24m"
        case .VeryLow:  accuracy = "+/- ? :-("
        default: break
        }
        print(String(format: "x: %5.2f, y: %5.2f, orientation: %3.0f, accuracy: %@", position.x, position.y, position.orientation, accuracy))
        
        self.locationView.updatePosition(position)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
}