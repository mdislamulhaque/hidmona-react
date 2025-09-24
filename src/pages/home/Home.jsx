import React from 'react'
import Slider from '../../components/home/heroSection/Slider'
import Features from '../../components/home/Features'
import Services from '../../components/home/Services'
import CardIssue from '../../components/home/CardIssue'
import DebitCard from '../../components/home/DebitCard'
import PromoCard from '../../components/home/PromoCard'
import useTitle from '../../hook/UseTitle'
import Services2 from '../../components/home/Services2'

export default function Home() {
  useTitle("Hidmona | Home");
  return (
      <>
      <Slider />
      <Features />
      {/* <Services /> */}
      <Services2/>
      <PromoCard/>
      <CardIssue />
      <DebitCard/>
      </>
  )
}
