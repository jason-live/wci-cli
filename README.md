# wci-cli
<img src="http://7xr3o7.com1.z0.glb.clouddn.com/wci_logo.png" width="180px" />

## wci-cli
A Webpack Continuous integration for React、Ant Design

## Install
##### Install with npm:
```
npm install -g wci-cli
```

## Commands
We have 1 commands: new
#### wci new [options]
Create app with new directory.
#### Usage Examples
```
$ wci new myapp
$ wci new myapp --pure
$ wci new myapp --no-install
```
#### options
* --demo -- Generate a dead simple project for quick prototype
* --no-install -- Disable npm install after files created

## Introduction
#### Generated File Tree
```
.
├── app                    # Source directory 
    ├── assets             # Store images, icons, ... 
    ├── scripts            # Store js
    ├── styles             # Store global less 
    ├── utils              # Utils 
    ├── index.js           # Entrance to the file 
    ├── index.tpl.html     # html template 
├── build                  # Continuous integration 
├── .babelrc               # babel config 
├── .eslintrc              # Eslint config 
├── .gitignore             # 
├── package.json           # 
└── wci.json               # Setting config
```

