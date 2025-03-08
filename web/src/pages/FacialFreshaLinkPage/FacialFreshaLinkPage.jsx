import { Metadata } from "@redwoodjs/web";
import FacialTreatmentComponent from 'src/components/FacialTreatmentComponent/FacialTreatmentComponent'

const FacialFreshaLinkPage = () => {
  return (
    <>
      <Metadata
        title="Blue Rose Nails and Beauty - Facial Treatments"
        description="Blue Rose Nails and Beauty - Facial Treatments including waxing and dermaplaning services"
      />
      <FacialTreatmentComponent />
    </>
  );
};

export default FacialFreshaLinkPage;
