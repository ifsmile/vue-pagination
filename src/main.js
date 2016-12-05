import Vue from "vue";
import Index from './view/index';

new Vue({
	el: '#app',
  	components:{
  		Index
  	},
  	render: h => h('index')
})
