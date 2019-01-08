import React, { Component } from 'react';
import './Stack.scss';
import Html from './stack_items/html/Html.js';
import CssStack from './stack_items/css/CssStack.js';
import JavaScriptStack from './stack_items/javascript/JavascriptStack.js';
import Ruby from './stack_items/ruby/Ruby.js';
import RubyOnRails from './stack_items/ruby_on_rails/RoR.js';
import ReactStack from './stack_items/react/ReactStack.js';
// import NodeStack from './stack_items/node/NodeStack.js';
// import ExpressStack from './stack_items/express/ExpressStack.js';
import Posgres from './stack_items/posgres/Posgres.js';
import Heroku from './stack_items/heroku/Heroku.js';
// import GitHub from './stack_items/github/GitHub.js';
const Stack = () => {
	  return (
	    <div className="stack-wrapper">
         <Html />
         <CssStack />
         <JavaScriptStack />
         <Ruby />
         <RubyOnRails />
         <ReactStack />
         <Heroku />
         <Posgres />
		</div>
	  )
}

export default Stack;