import React, {component} from 'react';
import { Text, View } from 'react--native';

export default class CreateStory extends
Component {
  render() {
    return (
      <view
          style={{
            flex: 1,
            justifyContent: "center"
            alignItems: "center"
          }}>
          <text>Criar Postagens</text>
      </view>
      
    )
  }
}