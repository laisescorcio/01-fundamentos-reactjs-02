// JSX = JS + XML
import { useState } from 'react'
import { Post } from './Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css';

import styles from './App.module.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Laís Escorcio 1"
            content= "Lorem ipsum"
          />
          <Post 
            author="Laís Escorcio 2"
            content= "Lorem ipsum"
          />
        </main>
      </div>
    </>
  )
}
