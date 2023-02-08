import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = () => (
  <div className='pizza-block-wrapper'>
    <div className='pizza-block'>
      <ContentLoader
        speed={0}
        width={280}
        height={466}
        viewBox='0 0 280 466'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
        <circle cx='585' cy='526' r='22' />
        <circle cx='140' cy='125' r='125' />
        <rect x='15' y='274' rx='5' ry='5' width='250' height='16' />
        <rect x='0' y='312' rx='10' ry='10' width='280' height='86' />
        <rect x='0' y='426' rx='10' ry='10' width='97' height='33' />
        <rect x='129' y='420' rx='25' ry='25' width='145' height='45' />
      </ContentLoader>
    </div>
  </div>
)
