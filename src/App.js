
import {useEffect,useLayoutEffect,useState} from 'react';
import { Route,Routes,BrowserRouter as Router,Switch} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Photoresponse,Albumrespo} from "./action/index.js";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from "axios";
import logo from './logo.svg';
import ProductList from "./component/producthomepage.js";

import './App.css';
import './test.scss';

// how react is looking as it this is the 
const queryClient = new QueryClient()
function App() {

  return (
    
    <Switch>
    <Route exact path={"/"} component={ProductList} />

    </Switch>
    
    
  );
}

export default App;
