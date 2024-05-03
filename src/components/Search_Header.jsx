import React from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class Search_Header extends React.Component {

    state = {
        keyword: "",
    };

    onSearchYoutube = (keyword) => {
        const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    
        axios
          .get(url)
          .then(response => {
              this.setState({
                videos: response.data.items,
              });
          })
          .catch(() => {
              console.log('通信に失敗しました');
          });
      }

    handleChangeInput = (e) => {
        this.setState({keyword: e.target.value});
        this._debounce(e.target.value)
    }

    _debounce = _.debounce(value => {
        this.props.onSearchYoutube(value);
    },200);

    render() {
        return (
            <div style={{marginTop: '20px', textAlign:'center'}}>
                <input 
                  onChange={this.handleChangeInput}
                  value={this.state.keyword}
                />
            </div>
        )
    }
}
