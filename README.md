# Tailwind CSS Custom Color Issue

This repository demonstrates a common issue where custom colors defined in a Tailwind CSS configuration file are not applied correctly.

## Problem

The `custom-blue` color, defined in `tailwind.config.js`, is not being used by the `bg-custom-blue` class in `index.html`.  The element remains its default style rather than the custom blue color.

## Solution

The solution involves ensuring that the Tailwind CSS build process correctly incorporates the custom colors and that the correct build file is referenced. In this case it was the build process and path to CSS file.