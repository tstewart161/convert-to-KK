import React from 'react';
import Audio from './Audio';
import Soundfont from 'soundfont-player'

class Music extends React.Component {

    instrument = () => {
        let ac = Audio.context
        console.log(ac.state)
        ac.resume();

        Soundfont.instrument(ac, 'voice_oohs', { soundfont: 'MusyngKite' }).then( (instrument) => {
            instrument.play('C4')

        })
    }

    render() {
        return (
            <div>
                <button onClick={this.instrument}>Instrument</button>
            </div>
        )
    }
}

export default Music;