import React, { useState } from "react";
import styled from "styled-components";

const TabMenu = styled.div`
  & > button {
    cursor: pointer;
    padding: 8px 16px;
    border: 0;
    border-bottom: 2px solid transparent;
    background: none;
  }

  & > button.focus {
    border-bottom: 2px solid #007bef;
  }

  & > button:hover {
    border-bottom: 2px solid #007bef;
  }
`;

const TabContent = styled.div`
  display: none;

  &.selected {
    display: block;
  }
`;

const TabWrapper = styled.div``;

const TabView = styled.div``;

export const TabItem = (props) => <div {...props} />;

export const Tabs = ({ defaultIndex = 0, onTabClick, children }) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);
  const changeTab = (newIndex) => {
    if (typeof onTabClick === "function") onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = children.filter((item) => item.type.name === "TabItem");

  return (
    <TabWrapper>
      <TabMenu>
        {items.map(({ props: { index, label } }) => (
          <button
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? "focus" : ""}
          >
            {label}
          </button>
        ))}
      </TabMenu>
      <TabView>
        {items.map(({ props }) => (
          <TabContent
            {...props}
            className={bindIndex === props.index ? "selected" : ""}
            key={`tab-content-${props.index}`}
          />
        ))}
      </TabView>
    </TabWrapper>
  );
};
