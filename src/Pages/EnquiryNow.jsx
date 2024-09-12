import EnquiryForm from "../Components/EnquiryForm"


const EnquiryNow = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Enquiry Now</h4>
        </div>
      </div>
      <EnquiryForm></EnquiryForm>

    </>
  )
}

export default EnquiryNow