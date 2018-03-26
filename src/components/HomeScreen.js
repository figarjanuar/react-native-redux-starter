import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { getAlamat, getNama } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Counter extends Component{
  render(){
    console.log(this.props.data.item);
    return(
      <Container>
        <Header style={{ backgroundColor:'#fff' }}>
          <Body>
            <Title style={{color:'#333'}}>Redux</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.data.item}
              </Text>
            </CardItem>
          </Card>
          <Button dark bordered onPress= {() => this.props.getNama()}>
            <Text>Show Name</Text>
          </Button>
          <Button dark bordered onPress= {() => this.props.getAlamat()}>
            <Text>Show Address</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    data : state.stateReducers.data
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({getAlamat: getAlamat, getNama: getNama}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
