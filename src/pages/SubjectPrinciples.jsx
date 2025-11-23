import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const SubjectPrinciples = ({ arrayOfPrinciples, subjectTitle }) => {
  const hasPrinciples = arrayOfPrinciples && arrayOfPrinciples.length > 0;
  const [openCardId, setOpenCardId] = useState(new Set());
  function togglecontent(cardId) {
    setOpenCardId((prev)=>{
      const newSet = new Set(prev);
      if(newSet.has(cardId)){
        newSet.delete(cardId);
      }else{{
        newSet.add(cardId);
      }}
      return newSet;
    })
  }
  if (!hasPrinciples) {
    return (
      <div className="principles-container">
        <h3>No principles available</h3>
      </div>
    );
  }

  return (
    <div className="principles-container">
      {subjectTitle && <h2>Principles: {subjectTitle}</h2>}
      <div className="principles-list">
        {arrayOfPrinciples.map(({ id, title, description, content,link }, index) => (
          <div key={id || index} className="principle-card">
      <div>
        <h3>{title}</h3>
        <IoIosArrowDown
          className={openCardId.has(id) && content ? "open" : ""}
          size={24}
          style={content && { cursor: "pointer" }}
          onClick={content ? () => togglecontent(id) : null}
        />
      </div>
      <p>{description}</p>
      {link&&(
  <a target="blank" href={link}>Tutorial Video</a>
      )}
    
      {content &&openCardId.has(id)&&
        (() => {
          const Comp = content;
          {
            return <Comp />;
          }
        })()}
    </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPrinciples;
