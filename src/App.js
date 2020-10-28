import React from 'react';
import BestSellers from './containers/BestSellers'
import Chat from './containers/Chat'
import { ReactComponent as Profile } from "./svg/profile.svg";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BestSellers 
        background='#FFF'
        itemHoverColor = '#FEF2EE'
        shoeColor='#FE805C'
        brandColor='#CCC'
        priceColor='#000'
      />
      <Chat 
        background = '#4643D3'
        name = 'Emily Dougrer'
        nameColor = '#FAFAFA'
        role = 'Front End Dev'
        roleColor='#FAFAFA'
        messageColor='#FFF'
        img = {<Profile />}
        message=' We use Boards to share initial goals and ideas.'
        showChatIn = '2'
      />
    </div>
  );
}
