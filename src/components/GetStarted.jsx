import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () =>(
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col rounded-full bg-primary w-[100%] h-[100%]`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className={`font-poppins font-medium text-[18px] leading-[32px]  mr-2`}>
          <span className=' text-gradient'>Get</span>
          <span>
            <img src={arrowUp} alt="arrowup" className='w-[23px] h-[23px] object-contain' />
          </span>
        </p>
      </div>
      <p className={`font-poppins font-medium text-[18px] leading-[32px] `}>
          <span className=' text-gradient'>Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted