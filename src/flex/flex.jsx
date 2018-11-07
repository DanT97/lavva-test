import React from 'react'
import firstt from '../img/stage2_1.png'
import firstt_vid from '../videos/HipHop_Video1_1.mp4'
import secondd from '../img/stage2_2.png'
import thirdd from '../img/stage2_3.png'
export default props =>(
    <div className='flex' id='flex'>
        <div className='first'>
            <div className='diive'>Diive</div>
            <div className='ioo'>in or out</div>
            <div className='shadow'>
                <a  href='/sec' className='plus'>+</a>
            </div>
            <img src={firstt}></img>
            <video src={firstt_vid} hidden='true'></video>
        </div>
        <div className='second'>
            <div className='diive'>Diive</div>
            <div className='idd'>IN DEEP</div>
            <div className='shadow'>
                <div className='plus'>+</div>
            </div>
            <img src={secondd}></img>
        </div>
        <div className='third'>
            <div className='diive'>Diive</div>
            <div className='ipp'>IN PARTY</div>
            <div className='shadow'>
                <div className='plus'>+</div>
            </div>
            <img src={thirdd}></img>
        </div>
    </div>
)