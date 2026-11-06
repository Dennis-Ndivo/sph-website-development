/* eslint-disable @next/next/no-img-element */
export default function Team() {
  const commsTeam = [
    {
      imgSrc: '../assets/img/350x350/img1.jpg',
      name: 'Christina Kray',
      role: 'Founder / CEO',
      description: 'Loves to chat about typography, you have been warned.',
    },
    {
      imgSrc: '../assets/img/350x350/img2.jpg',
      name: 'Jeff Fisher',
      role: 'Project Manager',
      description:
        'Multidisciplinary. Drinks too much coffee. Likes sentence fragments.',
    },
    {
      imgSrc: '../assets/img/350x350/img3.jpg',
      name: 'Sophia Harrington',
      role: 'Project Manager',
      description: 'Loves to chat about typography, you have been warned.',
    },
    {
      imgSrc: '../assets/img/350x350/img4.jpg',
      name: 'David Forren',
      role: 'Support Consultant',
      description: 'Behind every great project is a great Google Slides deck.',
    },
    {
      imgSrc: '../assets/img/350x350/img5.jpg',
      name: 'Amil Evara',
      role: 'UI/UX Designer',
      description:
        'Design swashbuckler. Trader of stonks. Will work for snacks.',
    },
    {
      imgSrc: '../assets/img/350x350/img6.jpg',
      name: 'Tom Lowry',
      role: 'UI/UX Designer',
      description: 'Loves to chat about typography, you have been warned.',
    },
  ]
  return (
    <>
      {/* Team */}
      <div className='container content-space-1'>
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3 className='display-4 mb-7'>Meet the Team</h3>
        </div>
        <div className='row mb-sm-5'>
          {commsTeam?.map(member => (
            <div key={member.name} className='col-sm-6 col-lg-4 mb-7'>
              <div className='w-65 text-center mx-auto'>
                <img
                  className='img-fluid rounded-circle mb-5'
                  src={member.imgSrc}
                  alt='Image Description'
                />
                <h6 className='mb-1'>{member.name}</h6>
                <span className='d-block'>{member.role}</span>
                <div
                  className='border-top mx-auto my-3'
                  style={{ maxWidth: '5rem' }}
                />
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Team */}
    </>
  )
}
