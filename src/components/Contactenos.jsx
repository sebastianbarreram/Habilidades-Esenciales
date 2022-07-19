import React from 'react'
import seb from './img/avatarseb.png';
import juan from './img/avatarjuan.jpeg';
import john from './img/avatarjohn.jpeg';
import mao from './img/avatarmao.jpeg';
import daniel from './img/avatardaniel.jpeg';

export default function Contactenos() {
    return (
        <>
            <div className="cards">
                <div className='item'>
                    <div className="card__image-holder">
                        <img className="card__image services-info__imagen" src={seb} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h4>
                            Sebastian Barrera Marín
                        </h4>
                    </div>
                </div>
                <div className='item'>
                    <div className="card__image-holder">
                        <img className="card__image services-info__imagen" src={daniel} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h4>
                            Daniel Steven Gil Cruz
                        </h4>
                    </div>
                </div>
                <div className='item'>
                    <div className="card__image-holder">
                        <img className="card__image services-info__imagen" src={john} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h4>
                            John Edward Acevedo Rojas
                        </h4>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className='item'>
                    <div className="card__image-holder">
                        <img className="card__image services-info__imagen" src={mao} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h4>
                            Manuel Mauricio Gomez Gallo
                        </h4>
                    </div>
                </div>
                <div className='item'>
                    <div className="card__image-holder">
                        <img className="card__image services-info__imagen" src={juan} alt="wave" />
                    </div>
                    <div className="card-title">
                        <h4>
                            Juan David Rivera Naranjo
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}
