import React from "react";

const RestaurantCategories = (props) => {
  const { itemCards } = props?.data;
  const { isContentVisible, setShowIndex, index } = props;

  const [isAccordianOpen, setisAccordianOpen] = React.useState(false);
  const toggleAccordion = (index) => {
    setShowIndex(index);
    setisAccordianOpen(!isAccordianOpen);
  };
  return (
    <div className="accordion">
      <span onClick={() => toggleAccordion(index)} className="accordian-title">
        {props?.data?.title} ({itemCards.length})
        <span>{isContentVisible && isAccordianOpen ? "⬆️" : "⬇️"}</span>
      </span>

      {isContentVisible && isAccordianOpen ? (
        <div className="accordion-content">
          {itemCards.map((item, index) => (
            <div key={index} className="accordion-item">
              <h3>{item.card.info.name}</h3>
              <button>Add +</button>
              <p>{item.card.info.description}</p>
              <p>Price: {item.card.info.price}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default RestaurantCategories;
