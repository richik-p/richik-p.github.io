---
layout: page
title: LEGO Building Robot
description: End-to-end robot arm system for detecting, picking, and stacking custom LEGO-style blocks.
img: assets/img/projects/lego-building-robot.png
importance: 1
category: robotics
github: https://github.com/richik-p/EE106A-Final_Project/
---

For Berkeley EECS 106A, our team built an end-to-end LEGO-style block assembly robot using a UR5 arm, wrist-mounted camera, custom 3D-printed blocks, ROS 2, OpenCV, ArUco calibration, and MoveIt motion planning.

The system detects square and rectangular blocks in a low-light workspace, transforms camera-frame detections into the robot base frame, and executes a repeatable pick-and-place routine to build multi-step structures from high-level instructions.

My strongest contributions were the low-light perception pipeline, perception-to-control integration, camera/table/arm transforms, and end-to-end testing. The final stack connected real-time block segmentation, instruction processing, inverse kinematics, and robot execution into a working robotics pipeline.

**Strengths**

- End-to-end perception-to-action robotics pipeline.
- Low-light OpenCV block detection using LAB color features and contour geometry.
- ROS 2 topics/services connecting perception, instructions, and arm movement.
- MoveIt-based inverse kinematics and pick-and-place execution.
- Custom block hardware iterated across four versions for reliable stacking.

**Gallery**

<div class="project-gallery">
{% include figure.liquid path="assets/img/projects/lego-building-robot/arm-placing-block.png" alt="UR5 arm placing a custom block" caption="UR5 arm executing a block pick-and-place motion." zoomable=true max-width="520px" %}

{% include figure.liquid path="assets/img/projects/lego-building-robot/system-design-flow.png" alt="System design flow from calibration through perception and pick-and-place" caption="System flow connecting calibration, camera transforms, block detection, and pick-and-place." zoomable=true %}

{% include figure.liquid path="assets/img/projects/lego-building-robot/vision-pipeline-stages.png" alt="Vision pipeline stages for low-light block detection" caption="Vision pipeline stages for low-light block detection." zoomable=true %}

{% include figure.liquid path="assets/img/projects/lego-building-robot/block-detection-results.png" alt="Small and long block detection results" caption="Small and long block selection from the same camera view." zoomable=true %}
</div>

**Links**

- [Project website](https://sites.google.com/berkeley.edu/106a-fa25-group-25-website)
