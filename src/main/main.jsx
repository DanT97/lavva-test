import React, {Component} from 'react'

import NeverSettle from '../neverSettle/neverSettle.jsx'
import Flex from '../flex/flex.jsx'
import Slider from '../slider/slider.jsx'
import Gallary from '../gallary/gallary.jsx'
import Wcsau from '../wcsau/wcsau.jsx'
import Instagram from '../instagram/instagram.jsx'

class Main extends Component {
    render() {
        return(
            <div className='Main'>
                 <div className="App-header">
                    <NeverSettle/>
                </div>
                <Flex/>
                <Slider/>
                <Gallary/>
                <Wcsau/>
                <Instagram/>
            </div>
        )
    }
}

export default Main;