import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../utility/colors-constant';

export default function TabBarIcon({name, focused}) {
  return (
    <Ionicons
      name={name}
      size={26}
      style={{marginBottom: -3}}
      color={focused ? Colors.tintColor : Colors.tabDefaultColor}
    />
  );
}

TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool,
};

TabBarIcon.defaultProps = {
  name: '',
  focused: false,
};
