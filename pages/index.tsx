// import Head from 'next/head'
// import { useEffect, useState } from 'react'
// import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import styles from './home.module.scss'
import { apiList } from 'apis/test'

export default function Home() {

  const handleSelfAPi = async () => {
    const res = await apiList();
    console.log(res)
  }
  useEffect(() => {
    handleSelfAPi()
  }, [])
  return (
    <div className={styles.title}>1234</div>
  )
}
