import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="left-container">
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution.Your fashion makes you been seen
              and heard that way you are.So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-button" type="button">
              Shop Now
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="nxt-trendz-home-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
