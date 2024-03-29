# Flex-Box
This is a cute CSS library that offers a few cute CSS functionality for doing layouts. This is a 12 column responsive grid built on Flexbox as the name suggest. There's 2 ways of making designs reactive to the screen sizes.

This repo contains 2 files that you can add at your leisure. flex-box.css and flex-box.gutters.css. you can replace .css with .min.css for the minified version of both files.

## flex-box.css
There's a number of classes for you to play the main class that you'll be playing with is the `flex` class and the classes that it derives as well as the `box` class and the classes that derives from it as well.

#### Classes: flex[-size]
The `flex` class is the container for a row or a column. you can add modifiers the class to declare at which size it should begin applying the flex. the variation that exists are `flex`, `flex-xs`, `flex-s`, `flex-m`, `flex-l`, and `flex-xl`

There are functionalities that you can use to augment the base behavior of the flex container. for example, the class `vcenter` will vertically center the contents, `hcenter` will center contents horizontally, and the class `vhcenter` will do both. Here's a list of the add on classes you can use to augment the default flex class behavior. do know that they will only be applied when flex is active (eg: if you declare `vhcenter` with `flex-l`. the `vhcenter` wont apply till the size of the display satisfies the l breakpoint.)

- `vcenter` centers content vertically within the container
- `hcenter` centers content horizontally within the container
- `vhcenter` centers content vertically and horizontally within the container
- `vstart` align items vertically to the start of the container
- `hstart` align items horizontally to the start of the container
- `vhstart` align items vertically and horizontally to the start of the container
- `vend` align items vertically to the end of the container
- `hend` align items horizontally to the end of the container
- `vhend` align items vertically and horizontally to the end of the container

- `column` make the container treat it's contents as a column instead of a row (this will mess with the above classes)
- `no-wrap` by default. the flex derived classes will wrap boxes that are too big to the next row. this will prevent that.

#### Classes: box[-size-gridWidth]
the `box` class is one item within a row. you can modify this class by adding a size to the box such as `-l-4` or `-m-12` resulting in classes such as `box-l-4` and `box-m-12`. This will allow you to flex your layout using boxes or switch between block and flex. you can choose if you want to use the application of lex or the application of the box size to adjust the design but mixing both is supported but isn't conceptually as straitforward.

IF you do not add any modifiers to the `box` class, the default behavior is to take up as much space as allowed to.

## flex-box.gutters.css
the gutters file is an addon which provides utilities for using and controlling gutters. the gutters are controlled by the CSS variable `--flex-box-gutter` and all gutters is this or a multiple of this. to use another base gutter size, you can add `body {--flex-box-gutter: <your desired base gutter size>;}` to your CSS file and your new base gutter size will be used. the default value of `--flex-box-gutter` is `1rem`

#### Class: gutter
for all `box` elements that are direct children of the `gutter` element the `gutter` class will cause each of these `box` derived children to have `padding-left` and `padding-right` to be base gutter size. This means that if you apply `gutter` to a `flex` derived class, the `box` children of that `flex` element will have gutters. otherwise, gutters wont be applied.

#### Class: use-gutter
sometimes, you want to apply the gutters of a `box` to something that isn't a `box`. in those cases, you can use `use-gutter` to achieve this.

#### Class: gutter[-direction][-modifier]
If you want to manually control your gutters, this is the class for you. the directions is for which direction the modifier you want to apply for example, `gutter-tbl` will add 1 base gutter's worth of padding to top, bottom and left. the order of the directions always goes from top -> right -> bottom -> left. this is consistent with using the `padding: <top> <right> <bottom> <left>` css shortcut. the directions you can use are t, r, b, l short for top, right, bottom left.

the modifiers would be added by adding `-[0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]` and will multiply the gutter's size by that multiplier. for example: `gutter-rl-0.25` will add 0.25 base gutters to the right and left of the element.


## Importing
You can import the built CSS via your CDN of choice. If you like, you can install this git repo it from using NPM. The CSS of this project it's raw state exists as a JS file. feel free to adjust it to your heart's content.
