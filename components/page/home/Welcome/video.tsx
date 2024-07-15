'use client'

import { shuffleArray } from '@/utils/array'
import { useState, useEffect, useRef } from 'react'

import s from './style.module.scss'

const vidoes = shuffleArray(['beach', 'mountain', 'sky', 'traffic'])

interface IProps {
  src: string
  order: number
  currentOrder: number
}
function Video(props: IProps) {
  const { src, order, currentOrder } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (order === currentOrder) {
      video.currentTime = 0
      video.play()
    }
  }, [currentOrder])

  return <>
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      style={{ opacity: order === currentOrder ? 1 : 0 }}
    >
      <source src={`/assets/lense-asset/videos/${src}_vp9.webm`} type='video/webm' />
      <source src={`/assets/lense-asset/videos/${src}.mp4`} type='video/mp4' />
    </video>
  </>
}

export function BackgroundVideo() {
  const [order, setOrder] = useState(0)

  useEffect(() => {
    const INTERVAL = 12000
    const setNextVideo = (currentOrder: number) => {
      const nextOrder = currentOrder + 1 >= vidoes.length ? 0 : currentOrder + 1
      setOrder(nextOrder)
      setTimeout(() => setNextVideo(nextOrder), INTERVAL)
    }
    setTimeout(() => {
      setNextVideo(order)
    }, INTERVAL)
  }, [])

  return <>
    <div className={s.background}>{
      vidoes.map((src, i) => <Video key={src} src={src} order={i} currentOrder={order} />)
    }</div>
  </>
}