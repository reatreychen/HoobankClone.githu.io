import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeaturesCard =({icon , title,content,index})=>(
   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" :"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className=" w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className=" font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
        {title}
      </h4 >
      <p className=" font-poppins font-normal text-dimWhite  text-[16px] leading-[24px] mb-1 "> {content} </p>
    </div>
   </div>
)

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        You do the business,
        <br className=" sm:block hidden " />
        we'll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts use a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
      <Button className ="mt-10"/>
    </div>

    <div className= {`${layout.sectionImg} flex-col`}>
      {features.map((features,index)=>(
        <FeaturesCard key={features.id} {...features} index={index} />
      ))}
    </div>

  </section>
);

export default Business;
