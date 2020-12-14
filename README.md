# Cube Tracking Tester

This is a tool that can help with developing a computer vision system that localizes objects lying on a flat plane.

Given the position of the camera on the robot and some camera parameters, it converts between:
pixel coordinates of an object within the camera image &harr;
spherical coordinates (without radius) of the object off camera's forward vector &harr;
rectangular position of the object on the ground in front of the robot (in inches).

There is also a visual representation from multiple angles, and full 2-way binding between all variables and visualizations.
If I was doing this today I'd probably use React rather than reimplementing the wheel :grin:.

*Developed for the 2018 FIRST Robotics Competition game (Power Up) by Team Paradox 2102.*
