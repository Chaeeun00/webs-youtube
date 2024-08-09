import React from 'react'
import Main from '../components/section/Main'

import { developer2Text } from '../data/developer2'
import { Link } from 'react-router-dom'

const Developer2 = () => {
  return (
    <Main
      title = "추천 개발자🐰"
      description = "추천 개발자 유튜버입니다.">
      <section id='developer2Page'>
                <h2>🍎 추천 개발자입니다.</h2>
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
