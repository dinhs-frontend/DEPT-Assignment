import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='Dept-intern_assignment/Images/bolcom.png'
                            text='A summer island in The Netherlands'
                            label='Bol.com'
                            path='/'/>
                        <CardItem
                            src='Dept-intern_assignment/Images/kempen.png'
                            text='Not some average banking website'
                            label='Luxury'
                            path='/'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='Dept-intern_assignment/Images/philips.png'
                            text='Beautiful design meet innovatie technology'
                            label='Mystery'
                            path='/'/>
                        <CardItem
                            src='Dept-intern_assignment/Images/gemeentemuseum.png'
                            text='A 100 years of Monderiaan and De stijl'
                            label='Adventure'
                            path='/'/>
                        <CardItem
                            src='Dept-intern_assignment/Images/lightning.png'
                            text='Delivering clarity on a global scale'
                            label='Adrenaline'
                            path='/'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='Dept-intern_assignment/Images/tui.png'
                            text='Swipe to find your next holiday destination'
                            label='Adventure'
                            path='/'/>
                        <CardItem
                            src='Dept-intern_assignment/Images/chocomel.png'
                            text='A campaign for the limited edition letter packs'
                            label='Luxury'
                            path='/'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='Dept-intern_assignment/Images/jbl.png'
                            text='Live like champion with Jerome Boateng'
                            label='Mystery'
                            path='/'/>
                        <CardItem
                            src='Dept-intern_assignment/Images/zalando.png'
                            text='Beautiful design meets innovative technology'
                            label='Adventure'
                            path='/'/>
                        <CardItem
                            src='Dept-intern_assignment/Images/koninklijke-bibliotheek.png'
                            text='The search for the most influential book ever'
                            label='Adrenaline'
                            path='/'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;