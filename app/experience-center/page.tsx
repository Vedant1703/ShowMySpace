import React from 'react'
import ExperienceCenterHero from './components/hero'
import StrategicPurpose from './components/strategicPurpose'
import PrimaryUseCases from './components/primaryUsecase'
import SpaceLayout from './components/spacelayout'
import CustomerJourney from './components/customerjourney'
import OperationalRoles from './components/operationalRoles'
import InvestmentROI from './components/investmentROI'
import LaunchKPIs from './components/launchKPI'
const page = () => {
  return (
    <div>
      <ExperienceCenterHero />
      <StrategicPurpose />
      <PrimaryUseCases />
      <SpaceLayout />
      <CustomerJourney />
      <OperationalRoles />
    <InvestmentROI />
    <LaunchKPIs />
    </div>
  )
}

export default page
