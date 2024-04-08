import { footerLinks } from './links'

function footer() {
  return (
    <footer>
      <div className='mt-12 flex flex-wrap gap-16 rounded-ss-[120px] bg-gradient-to-br from-primary from-60% to-[#A23Eb3] px-16 py-20 text-white md:mt-0 md:gap-32 md:px-32 xl:px-40'>
        <div>
          <h2 className='mb-5 font-interSemiBold text-xl'>Informations</h2>
          <ul className='grid gap-5'>
            {footerLinks.informations.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
          <ul className='mt-5 flex gap-3'>
            {footerLinks.informations?.[4]?.socialMediaLinks?.map(
              (item, index) => (
                <li key={index}>
                  <a href={item.link}>
                    <img
                      src={item.img?.toString()}
                      alt={item.platform}
                      className='size-[31px]'
                    />
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h2 className='mb-5 font-interSemiBold text-xl'>Resources</h2>
          <ul className='grid gap-5'>
            {footerLinks.resources.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='mb-5 font-interSemiBold text-xl'>Features</h2>
          <ul className='grid gap-5'>
            {footerLinks.features.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='mb-5 font-interSemiBold text-xl'>Blogs</h2>
          <ul className='grid gap-5'>
            {footerLinks.blogs.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
