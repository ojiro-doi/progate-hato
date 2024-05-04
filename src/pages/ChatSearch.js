import React, { useState, useEffect } from 'react';
import Youtube from '../components/Youtube';
import { countryList } from '../components/CountryList';
import CountryListSelect from '../components/CountryListSelect';
import axios from 'axios';
import RandomDisplay from '../components/RandomDisplay';
import Chat from '../components/chat';
import { PresWiki } from '../components/PresWiki';
import Map from '../components/Map';  
import CountryName from '../components/CountryName';


function ChatSearch() {

  return (
    <div>
      <CountryName/>
    </div>
  );
}

export default ChatSearch;
