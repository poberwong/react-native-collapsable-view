# react-native-collapsable-view
a expandable and collapsable view that can be controlled with a handler   
![](http://upload-images.jianshu.io/upload_images/442688-cb766a48d713b4fa.gif?imageMogr2/auto-orient/strip)

## Install
`npm install react-native-collapsable-view --save`

## Usage
```javascript
render() {
    return (
      <ScrollView style={styles.container}>
        <Panel title='A Panel with short content text'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Panel>
        <Panel title='A Panel with long content text'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Panel>
        <Panel title='Another Panel'>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
        </Panel>
        <Panel title='Another Panel'>
          <Image source={require('./Funny.png')} style={{height: 200, width: null, resizeMode: 'contain'}}/>
        </Panel>
      </ScrollView>
    );
  }
```
Like this, you can fill everything you like in the `Panel` and you'd better use 
`ScrollView` as the parent view because you don't know how large the children will be.

## Props
 Name | Description | Default | Type  
------|-------------|----------|-----------  
expanded | the initial state of panel | true | boolean  
title | title on the handler | string | undefined

## License
*MIT*
