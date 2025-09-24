import React from 'react'
import Slider from '../../components/home/heroSection/Slider'
import Features from '../../components/home/Features'
import Services from '../../components/home/Services'
import CardIssue from '../../components/home/CardIssue'
import DebitCard from '../../components/home/DebitCard'
import PromoCard from '../../components/home/PromoCard'
import useTitle from '../../hook/UseTitle'

export default function Home() {
  useTitle("Hidmona | Home");
  return (
      <>
      <Slider />
      <Features />
      <Services />
      <PromoCard/>
      <CardIssue />
      <DebitCard/>
      </>
  )
}
