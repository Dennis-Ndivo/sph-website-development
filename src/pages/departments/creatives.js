/* eslint-disable @next/next/no-img-element */
const creatives = () => {
  return (
    <>
      {/* Hero */}
      <div className='bg-soft-warning'>
        <div className='container content-space-t-2 content-space-t-md-3 content-space-b-1'>
          {/* Heading */}
          <div className='w-lg-75 text-center mx-lg-auto mb-7'>
            <h1 className='display-3 text-primary'>
              Creatives <span className='text-warning'>Department</span>
            </h1>
            <p className='lead'>Ubunifu Unaong'ara, Sanaa Inabadilisha Dunia</p>
          </div>

          {/*Creatives main image*/}
          <div className='text-center bg-gray-300'>
            <img
            style={{maxWidth:"80%"}}
              className=''
              src='../images/creatives/creatives.jpeg'
              alt='Image Description'
            />
          </div>
        </div>

        {/* Description */}
        <div className='container content-space-b-1 content-space-b-md-3'>
          <div className='row justify-content-lg-center'>
            <div className='col-lg-8'>
              <p>
                Welcome to the Creative Department, where imagination meets
                action and ideas come to life! We're not your average
                department; in fact, we like to think of ourselves as the
                heartbeat of the hub. We're the ones who bring color, vibrancy,
                and a touch of magic to everything we do. Get ready to embark on
                a journey where innovation meets excitement, where ideas take
                flight, and where the possibilities are limitless. Join us as we
                explore the intersection of creativity and social issues and
                empower artists to make a difference. We are excited to
                introduce you to the diverse initiatives and programs we offer.
              </p>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Description */}

        {/* Blog */}
        <div className="container content-space-1">
          {/* Heading */}
          {/* End Heading */}
          <div className="row mb-5 mb-sm-5">
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100 p-2">
                <img
                  className="card-img"
                  src="../images/youngbusiness/image1.jpg"
                  alt="Image Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Happy Hour: Unleashing Fun and Camaraderie</h5>
                  <p className="card-text">
                    Join us for an unforgettable experience at Happy Hour, where the
                    Swahilipot community comes together for laughter and enjoyment.
                    Engage with fellow members through exhilarating games and
                    friendly competition as part of the Ninja and Pirates teams.
                    Let's create joyful memories and foster camaraderie together.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100 p-2">
                <img
                  className="card-img"
                  src="../images/youngbusiness/image2.jpg"
                  alt="Image Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Theatre Zone: Cultivating the Acting Stars of Tomorrow</h5>
                  <p className="card-text">
                    If you have a passion for acting, our Theatre Zone program is
                    the perfect place to nurture your talent. Through comprehensive
                    training and educational initiatives, we empower aspiring actors
                    to shine on both stage and screen. Join us on this
                    transformative journey and unlock your full potential.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100 p-2">
                <img
                  className="card-img"
                  src="../images/aboutpage/1.jpeg"
                  alt="Image Description"
                />
                <div className="card-body">
                  <h5 className="card-title">SoundPot: Amplifying Young Voices</h5>
                  <p className="card-text">
                    At SoundPot, we believe that every voice deserves to be heard.
                    Our dedicated team of mentors and trainers will guide you on a
                    melodic journey of self-expression and artistic growth. Whether
                    you're a singer, poet, or voice artist, join us and let your
                    voice resound in the hearts of others.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100 p-2">
                <img
                  className="card-img"
                  src="../images/youngbusiness/image4.jpg"
                  alt="Image Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Pot Culture: Unveiling the Arts</h5>
                  <p className="card-text">
                    Immerse yourself in the vibrant world of arts at Pot Culture,
                    our periodic event that celebrates creativity in all its forms.
                    Experience captivating performances of dance, music, and poetry
                    as we showcase the rich tapestry of artistic expression within
                    our community. Prepare to be inspired and amazed.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/*End Col*/}
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              {/* Card */}
              <div className="card h-100 p-2">
                <img
                  className="card-img"
                  src="../images/youngbusiness/image5.jpg"
                  alt="Image Description"
                />
                <div className="card-body">
                  <h5 className="card-title">KOO Store: Unveiling Art and Society</h5>
                  <p className="card-text">
                    Step into the KOO Store, a unique space where art and meaningful
                    conversations converge. Join us in thought-provoking dialogues
                    that inspire change, and delve into the fascinating connection
                    between creativity and societal challenges. Together, let's
                    explore the power of art to transform our world.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/*End Col*/}
          </div>
          {/* End Row */}
          {/* Info */}
          {/* End Info */}
        </div>
        {/* End Blog */}
      </div >

    </>
  )
}

export default creatives
