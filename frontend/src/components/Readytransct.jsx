import React from "react";
import Primarybutton from "./Primarybutton";
import Outlinebutton from "./Outlinebutton";

const Readytransct = () => {
  const textSections = [
    {
      tag: "h1",
      className: "main_heading",
      content: (
        <>
          <span>Ready to</span> modernize the way
        </>
      ),
    },
    {
      tag: "h3",
      className: "main_heading",
      content: (
        <>
          you <span>transact</span>
        </>
      ),
    },
    {
      tag: "p",
      className: "description",
      content: "Join thousands of industry leaders today",
    },
  ];

  return (
    <React.Fragment>
      <div className="readytransct_section">
        <div className="text-center" id="heroText">
          {textSections.map((section, index) => {
            const Tag = section.tag;
            return (
              <Tag key={index} className={section.className}>
                {section.content}
              </Tag>
            );
          })}

          <div className="d-flex justify-content-center align-items-center  flex-column flex-md-row gap-3 mt-5">
            <Outlinebutton name="Contact Experts" icon={null} />
            <Primarybutton name="Get Started" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Readytransct;
