import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Developer2 = lazy(() => import('./pages/Developer2'));
const Webd = lazy(() => import('./pages/Webd'));
const Webd2 = lazy(() => import('./pages/Webd2'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
      <BrowserRouter>
          <Suspense fallback={<Main />}>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path="/today" element={<Today />} />
                  <Route path="/developer" element={<Developer />} />
                  <Route path="/developer2" element={<Developer2 />} />
                  <Route path="/webd" element={<Webd />} />
                  <Route path="/webd2" element={<Webd2 />} />
                  <Route path="/website" element={<Website />} />
                  <Route path="/gsap" element={<Gsap />} />
                  <Route path="/port" element={<Port />} />
                  <Route path="/youtube" element={<Youtube />} />
                  <Route path='/channel/:channelId' element={<Channel />} />
                  <Route path='/video/:videoId' element={<Video />} />
                  <Route path='/search/:searchId' element={<Search />} />
                  <Route path="*" element={<Not />} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  );
}

export default App
