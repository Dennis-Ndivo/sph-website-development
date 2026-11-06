/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className='bg-soft-warning overflow-hidden'>
        <div className='container content-space-1 content-space-t-md-2'>
          <div className='w-lg-75 mx-lg-auto'>
            {/* Heading */}
            <div className='text-center'>
              <h1 className='display-4 text-primary'>
                Communications <br />
                <span className='text-warning'>Department</span>
              </h1>
              <p className='lead'>Kujenga Mawasiliano, Kueneza Sauti</p>
            </div>
            {/* End Heading */}
          </div>
        </div>
        <div className='container-fluid position-relative px-lg-7'>
          <div className='mb-5'>
            <img
              className='img-fluid rounded'
              src='../images/logos/comms-photo.jpg'
              alt='Image Description'
            />
          </div>
          {/* Background Shapes */}
          <div
            className='position-absolute zi-n1'
            style={{ top: '-6rem', left: '-6rem' }}
          >
            <img
              src='../assets/svg/components/shape-1.svg'
              alt='SVG'
              width={500}
              style={{ width: '12rem' }}
            />
          </div>
          <div
            className='position-absolute zi-n1'
            style={{ bottom: '-6rem', right: '-7rem' }}
          >
            <img
              src='../assets/svg/components/shape-7.svg'
              alt='SVG'
              width={250}
            />
          </div>
          {/* End Background Shapes */}
        </div>
      </div>
      {/* End Hero */}
    </>
  )
}
