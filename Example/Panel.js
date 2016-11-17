import React, { Component, PropTypes } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	Animated
} from 'react-native'

const ICONS = {
	up: require('./images/arrow-up.png'),
	down: require('./images/arrow-down.png')
}

export default class extends Component {
	static propTypes = {
		expanded: PropTypes.bool,
		title: PropTypes.string
	}

	static defaultProps = {
		expanded: true
	}

	constructor (props) {
	  super(props);

	  this.state = {
	  	expanded: props.expanded,
	  	animation: new Animated.Value()
	  }
	}

	toggle = () => {
		const { expanded, maxHeight, minHeight, animation } = this.state
		const initialValue = expanded ? minHeight + maxHeight : minHeight
		const finalValue = expanded ? minHeight : minHeight + maxHeight

		this.setState({expanded: !expanded})
		animation.setValue(initialValue)

		Animated.timing(animation, {
			toValue: finalValue
		}).start()
	}

	render () {
		const { expanded, animation, maxHeight } = this.state
		const icon = expanded ? 'up' : 'down'

		return (
			<Animated.View style={[styles.container, {height: animation}]}>
				<View style={styles.titleContainer}
					onLayout={event => this.setState({minHeight: event.nativeEvent.layout.height})}>
					<Text style={styles.title}>{this.props.title}</Text>
					<TouchableHighlight
						style={styles.button}
						onPress={this.toggle}
						underlayColor="#f1f1f1">
						<Image style={styles.buttonImage} source={ICONS[icon]} />
					</TouchableHighlight>
				</View>
				{/*fixed bug in recent version of react-native that maxHeight will be changed when body is collapsed*/}
				<View style={styles.body}
					onLayout={event => !maxHeight && this.setState({maxHeight: event.nativeEvent.layout.height})}>
					{this.props.children}
				</View>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
  container : { 
    backgroundColor: '#fff', 
    margin:10, 
    overflow:'hidden' 
  }, 
  titleContainer : { 
    flexDirection: 'row' 
  }, 
  title : { 
    flex : 1, 
    padding : 10, 
    color :'#2a2f43', 
    fontWeight:'bold' 
  }, 
  button : {
  	justifyContent: 'center',
  	alignItems: 'center'
  }, 
  buttonImage : { 
    width : 25, 
    height : 20 
  }, 
  body : { 
    padding : 10, 
    paddingTop : 0 
  }
});