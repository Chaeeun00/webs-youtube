import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { developer2Text } from '../data/developer2'
import { Link } from 'react-router-dom'

const Developer2 = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const developer2PageClass = loading ? 'isLoading' : 'isLoaded';
   return (
    <Main
      title = "ちぇうんのおすすめ 🩶"
      description = "ちぇうんのおすすめです。">
      <section id='developer2Page'className={developer2PageClass}>
                <h2>🧸 ちぇうんのおすすめ</h2>
                <div className="developer2__inner">
                    {developer2Text.map((developer2, key) => (
                        <div className="developer2" key={key}>
                            <div className="developer2__img play__icon">
                                <Link to={`/channel/${developer2.channelId}`}>
                                    <img src={developer2.img} alt={developer2.name} />
                                </Link>
                            </div>
                            <div className="developer2__info">
                                <Link to={`/channel/${developer2.channelId}`}>
                                    {developer2.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </Main>
  )
}

export default Developer2
