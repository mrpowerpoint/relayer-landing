import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Content from '../asteroids/Content';
import isMobile from '../tools/Tools';

import dynamic from 'next/dynamic';

import useMobile from '../context/MobileStore';

export default function Home() {
  const [Reacteroids, setReacteroids] = useState(null)
  const [playing, setPlaying] = useState(false);
  const [theme, setTheme] = useState(0) // 0 for dark theme 1 for light

  const mobile = useMobile();
  
  const [colours, setColours] = useState({primary: '#000', secondary: '#fff'})

  useEffect(() => {
    if (theme) {
      setColours({primary: '#fff', secondary: '#000'})
    } else {
      setColours({primary: '#000', secondary: '#fff'})
    }
  }, [theme])

  useEffect(() => {
    const Reacteroids = dynamic(import("../asteroids/Reacteroids"))
    setReacteroids(Reacteroids);
  }, [])
  
  const render = () => {
    if (mobile) {
      return (
        <Content setTheme={setTheme} theme={theme} mobile={mobile} />
      )
    } else {
      return (
        
        Reacteroids ? 
          <Reacteroids playing={playing} setPlaying={setPlaying}
            theme={theme} primary={colours.primary} secondary={colours.secondary} setTheme={setTheme} />
          : <></>
      )
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Relayer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', color: `${colours.secondary}`, background: `${colours.primary}`}}>
        {render()}
      </div>
    </div>
  )
}
