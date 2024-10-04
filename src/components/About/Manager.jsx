import React from "react";
import manager from "../../../public/assets/manager.png";

const Manager = () => {
  return (
    <div className="px-12 py-12 h-auto">
      <div className="grid grid-cols-2">
        <div className="sticky h-fit pt-24">
          <div className="relative flex flex-col items-center">
            {/* Background Box */}
            <div className="absolute -top-9 right-44 w-2/4 h-4/6 bg-primary"></div>
            <div className="absolute top-24 right-44 w-2/4 h-4/6 bg-primary"></div>

            {/* Image */}
            <img
              src={manager}
              className="relative z-40 w-2/4 h-auto object-cover"
              alt="Manager"
            />

            {/* Text below the image */}
            <div className="relative text-center mt-8 font-poppins">
              <h2 className="text-2xl font-medium">Chidinma James (Manager)</h2>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="font-poppins text-justify px-32 pt-12">
          The United Nations is an international organization founded in 1945.
          Currently made up of 193 Member States, the UN and its work are
          guided by the purposes and principles contained in its founding
          Charter. The UN has evolved over the years to keep pace with a
          rapidly changing world. But one thing has stayed the same: it
          remains the one place on Earth where all the world's nations can
          gather together, discuss common problems, and find shared solutions
          that benefit all of humanity. The Secretary-General is Chief
          Administrative Officer of the UN – and is also a symbol of the
          Organization's ideals and an advocate for all the world's peoples,
          especially the poor and vulnerable.
          <br />
          <br />
          The Secretary-General is appointed by the General Assembly on the
          recommendation of the Security Council for a 5-year, renewable term.
          The current Secretary-General, and the 9th occupant of the post, is
          António Guterres of Portugal, who took office on 1 January 2017. On
          the 18th of June, 2021, Guterres was re-appointed to a second term,
          pledging as his priority to continue helping the world chart a
          course out of the COVID-19 pandemic.
          <br />
          <br />
          The United Nations is an international organization founded in 1945.
          Currently made up of 193 Member States, the UN and its work are
          guided by the purposes and principles contained in its founding
          Charter. The UN has evolved over the years to keep pace with a
          rapidly changing world. But one thing has stayed the same: it
          remains the one place on Earth where all the world's nations can
          gather together, discuss common problems, and find shared solutions
          that benefit all of humanity. The Secretary-General is Chief
          Administrative Officer of the UN – and is also a symbol of the
          Organization's ideals and an advocate for all the world's peoples,
          especially the poor and vulnerable.
          <br />
          <br />
          The Secretary-General is appointed by the General Assembly on the
          recommendation of the Security Council for a 5-year, renewable term.
          The current Secretary-General, and the 9th occupant of the post, is
          António Guterres of Portugal, who took office on 1 January 2017. On
          the 18th of June, 2021, Guterres was re-appointed to a second term,
          pledging as his priority to continue helping the world chart a
          course out of the COVID-19 pandemic.
        </div>
      </div>
    </div>
  );
};

export default Manager;