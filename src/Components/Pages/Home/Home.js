import React from 'react';
import home_bg from '../../../images/home-bg.jpg'
import s from './Home.module.scss'

class Home extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div><img src={home_bg} alt="" className={s.image}/></div>
                <div className={s.content}>
                    learn English with pleasure
                </div>
            </div>
        );
    }
}

export default Home;
