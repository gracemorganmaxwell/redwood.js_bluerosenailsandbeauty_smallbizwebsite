import TreatmentRow from 'src/components/TreatmentRow/TreatmentRow'
import { Metadata } from '@redwoodjs/web'

const TreatmentsPage = () => {
  return (
    <>
      <Metadata title="Treatments" description="Treatment page" />
      <TreatmentRow />
    </>
  )
}

export default TreatmentsPage
