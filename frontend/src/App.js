/**
 * Main application component for landing page
 */

import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import photos from './data/photos.json';
import Lightbox from 'react-images';
import { Layout,Icon } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lightboxIsOpen:false,
      currentImage:0,
      PHOTO_SET:[]
    }
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  /**
   * [componentDidMount called before first render]
   * Api request ot backend sent from this method
   */
  componentDidMount(){
    let context = this;
    axios.get('http://localhost:4000/api/retrievephotos')
              .then(function (response) {
                console.log(response.data.data);
                let PHOTO_SET = response.data.data;
                context.setState({PHOTO_SET})
              })
              .catch(function (error) {
                console.log(error);
              });
  }

  /**
   * [openLightbox openpopup image viewer on Click]
   * @param  {[object]} event
   * @param  {[object]} obj
   * @return null
   */
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  /**
   * [closeLightbox dismiss popup]
   * @return null
   */
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  /**
   * [gotoPrevious open previous image]
   * @return null
   */
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  /**
   * [gotoNext open next image]
   * @return {[type]} [description]
   */
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', width: '100%' }}>
            <span className="leftheader">
              <Icon style={{ fontSize: 20, color: '#fff' }} type="star" />
            </span>
            <span className="headerTitle">
              <Icon type="api" style={{ fontSize: 16, color: '#fff', padding:4 }} spin={true}/>
                Simple Photo gallery
              <Icon type="api" style={{ fontSize: 16, color: '#fff', padding:4 }} spin={true}/>
            </span>
            <span className="rightheader">
              <Icon style={{ fontSize: 20, color: '#fff' }} type="star" />
            </span>
          </Header>
          <Content style={{ padding: '0', marginTop: 64, flex:1 }}>
            <Gallery photos={this.state.PHOTO_SET} columns={3} onClick={this.openLightbox}/>
            <Lightbox
               theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
               images={this.state.PHOTO_SET.map(x => ({ ...x, srcset: x.srcSet, caption: x.alt }))}
               backdropClosesModal={true}
               onClose={this.closeLightbox}
               onClickPrev={this.gotoPrevious}
               onClickNext={this.gotoNext}
               currentImage={this.state.currentImage}
               isOpen={this.state.lightboxIsOpen}
               width={1600}
               />
          </Content>
        </Layout>
      </div>
    );
  }
}


export default App;
