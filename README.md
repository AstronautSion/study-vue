# vue-todo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
<br>
<br>
<br>
<br>
## 뷰 CLI를 이용한 프로젝트 구성 방법

``` bash
vue init webpack-simple vue-todo

cd vue-todo
npm install
npm run dev
```

* scf : vscode에서 vue빠른 화면구성 단축키

## props
```javascript
//App.vue
<TodoList v-bind:propsdata="todoItems">...

data: function(){
  return{
    todoItems : []
  }
}

//TodoList.vue
<li v-for="item in propsdata">...

props: ['propsdata']
```
 
## $emit
```javascript
//App.vue

<TodoList v-on:removeItem="removeOneItem">...

methods: {
  removeOneItem: function(todoItem, index){....}
}

//TodoList.vue ####

methods: {
  removeTodo : function(todoItem, index){
     this.$emit('removeItem', todoItem, index);
  },
}
```
<br><br>

## Vuex
무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태관리 패턴이자 라이브러리 <br>(React의 Flux 패턴에서 기인함)
<br>
<br>
<b>Flux란?</b><br>
MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 Unidirectional data flow 단방향 데이터 흐름

![flux-simple-f8-diagram-1300w](https://user-images.githubusercontent.com/15932623/56467434-cadf2780-6459-11e9-920c-01736be1dce1.png)


1.  action : 화면에서 발생하는 이벤트 또는 사용자의 입력
2.  dispatcher : 데이터를 변경하는 방법, 메서드
3.  model : 화면에 표시할 데이터
4.  view : 사용자에게 비춰지는 화면

<br>
## Vuex로 해결할 수 있는 문제

1. MVC패턴에서 발생하는 구조적 오류
2. 컴포넌트 간 데이터 전달 명시
3. 여러개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제
<br>

## Vuex 기술요소
- state : 여러 컴포넌트에 공유되는 데이터 -data
- getters : 연산된 state 값을 접근하는 속성 -computed  ( 값이 변할때 다시 동작 아니면 그냥 값을줌)
- mutations : state 값을 변경하는 이벤트 로직 메서드 -methods
- actions : 비동기 처리 로직을 선언하는 메서드 -aysnc methods

<br>
<br>

### [ state ]


```javascript
//vue
data: {
  msg : 'hi'
}
 
<p> {{ msg }}</p>
```

```javascript
//vuex
state: {
  msg : 'hi'
}
 
<p>{{ this.$store.state.msg }} </p>
```
<br>



### [ getters ]

```javascript
state: {
 num : 10
},
getters: {
  getNumber(state){
     return state.num;
  }
}
<p>{{ this.$store.geeters.getNumber }}</p>
```

<br>
<br>

### [ mutations ]
state의 값을 변경할 수 있는 유일한 방법이자 메서드
뮤테이션은 commit()으로 동작

<br>

```javascript
//store.js
state : {num: 10}
mutations : {
  printNumbers(state){
     return state.num
  },
  sumNumbers(state, anotherNum){
    return state.num + anotherNum;
  }
}

//App.vue
this.$store.commit('printNumbers');
this.$store.commit('sumNumbers', 20);
```

### [ Actions ]
비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
데이터 요청, Promise, ES6 async와 같은 비동기 처리는 모두 actions에 선언

```javascript
//store.js
state: {
  product : {...}
},
mutations: {
  setData(state, fetchedData){
    state.product = fetchedData;
  }
},
actions: {
  fetchProductData(context){
    return axios.get('https://domain.com/product/1')
                  .then( response => context.commit('setData', response) );
  }
}

//App.vue
methods: {
  getProduct(){
    this.$store.dispatch('fetchProductData');
  }
}
```

