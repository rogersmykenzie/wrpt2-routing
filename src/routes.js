import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';
import Post from './Components/Post/Post';

const routes = (
  <Switch>
    <Route path='/topics' component={TopicList} />
    <Route path='/post/:id' component={Post} />
    <Route exact path='/' component={Home} />
  </Switch>
);

export default routes;