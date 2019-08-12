import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      number : 0,
      result : 0,
      tmp : 0,
      op : "",
      ch :1,
      is_float:0,
      }
  }
  cc(){
    this.setState({
      number : 0,
      result : 0,
      tmp : 0,
      op : "",
      ch :1,
      is_float:0
      }) 
  }
  op(i){
    if(this.state.op==""){
      this.setState({
        result:Number(this.state.tmp),
        tmp:0,
        op:i,
        ch:1,
        is_float:0
      }) 
    }
    else if(i=='/'){
      this.setState({op:i}) 
    }
    else if(i=='*'){
      this.setState({op:i}) 
    }
    else if(i=='-'){
      this.setState({op:i}) 
    }
    else if(i=='+'){
      this.setState({op:i}) 
    }
    else if (i=='='){
      if(this.state.op=='/'){
        this.setState({
          number:Number(this.state.tmp),
          result:Number(this.state.result)/Number(this.state.tmp),
          ch:1,
          is_float:0
        }) 
      }
      else if(this.state.op=='*'){
        this.setState({
          number:Number(this.state.tmp),
          result:Number(this.state.result)*Number(this.state.tmp),
          ch:1,
          is_float:0
        }) 
      }
      else if(this.state.op=='-'){
        this.setState({
          number:Number(this.state.tmp),
          result:Number(this.state.result)-Number(this.state.tmp),
          ch:1,
          is_float:0
        }) 
      }
      else if(this.state.op=='+'){
        this.setState({
          number:Number(this.state.tmp),
          result:Number(this.state.result)+Number(this.state.tmp),
          ch:1,
          is_float:0
        }) 
      }
    }
  }
  set_num(inp){
    if(this.state.ch){
      this.setState({tmp:inp}) 
      this.setState({ch:0})
    }
    else if(inp=='.' && this.state.is_float==0){
      this.setState({tmp:this.state.tmp+inp})
      this.setState({is_float:1})
    }
    else if(inp!='.')
      this.setState({tmp:this.state.tmp+inp}) 
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.put}>
          <Text style={{alignSelf:'flex-end',color:'white',fontSize:60,paddingRight:20}}>
          {this.state.ch==1?  this.state.result: this.state.tmp }
          </Text>
        </View>
        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btnS} onPress ={()=>this.cc()}> 
            <Text style={styles.btnf}>AC</Text > 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS} > 
            <Text style={styles.btnf}>+/-</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS} > 
            <Text style={styles.btnf}>%</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress ={()=>this.op("/")}> 
            <Text style={styles.btnf1}>÷</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("7")}> 
            <Text style={styles.btnf1}>7</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("8")}> 
            <Text style={styles.btnf1}>8</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("9")}> 
            <Text style={styles.btnf1}>9</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress ={()=>this.op("*")}> 
            <Text style={styles.btnf1}>x</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("4")}> 
            <Text style={styles.btnf1}>4</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("5")}> 
            <Text style={styles.btnf1}>5</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("6")}> 
            <Text style={styles.btnf1}>6</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress ={()=>this.op("-")} > 
            <Text style={styles.btnf1}>-</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("1")}> 
            <Text style={styles.btnf1}>1</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("2")}> 
            <Text style={styles.btnf1}>2</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num("3")}> 
            <Text style={styles.btnf1}>3</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress ={()=>this.op("+")}> 
            <Text style={styles.btnf1}>+</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn0} onPress ={()=>this.set_num("0")}> 
            <Text style={styles.btnf1}>0</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress ={()=>this.set_num(".")}> 
            <Text style={styles.btnf1}>.</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress ={()=>this.op("=")}> 
            <Text style={styles.btnf1}>=</Text> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'black',
    padding:8

  },
  put:{
    flex: 3,
    flexDirection: 'row',
    alignSelf:'flex-end'
  },
  gbtn:{ 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn:{
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    borderRadius: 80,
    margin:8,
    height: 60,
  },
  btn0:{
    flex: 2.2, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    borderRadius: 40,
    margin:8,
    height: 60,
  },
  btnS:{
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#999999',
    borderRadius: 40,
    margin:8,
    height: 60,
  },
  btnS2:{
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 40,
    margin:8,
    height: 60,

  },
  btnf:{
    fontSize:22,
    color:'black',
  },
  btnf1:{
    fontSize:25,
    color:'white',
  },

})
