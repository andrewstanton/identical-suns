import React from "react";

import styled from "styled-components";
import { lighten } from "polished";

import { Color } from "../Color";
import { Type } from "../Type";

const StyledTab = styled.div``;

export const Tab = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 1px solid ${Color.green};
  border-bottom: 0;
  border-right: 0;
  color: ${Color.green};
  font-family: ${Type.header};

  ${props =>
    props.active &&
    `
    background: ${Color.green};
    color: ${Color.white} !important;
  `}

  &:last-child {
    border-right: 1px solid ${Color.green};
  }

  &:hover {
    background: ${lighten(0.1, Color.green)};
    color: ${Color.white};
    text-decoration: none !important;

    ${props =>
      props.active &&
      `
      background: ${Color.green};
      cursor: default;
    `}
  }
`;

export const LinkTabs = ({ tabs, ...props }) => (
  <StyledTab {...props}>
    {tabs.map((tab, ix) => (
      <a href={tab.link} key={ix}>
        <Tab active={tab.active}>{tab.label}</Tab>
      </a>
    ))}
  </StyledTab>
);

export const TabContainer = styled.div`
  border: 1px solid ${Color.green};
`;

export const TabContent = styled.div`
  padding: 1.5rem;
  min-height: 200px;
  ${props => (props.active ? "display: block;" : "display: none;")}
`;

const changeTab = ({ tabs, setTabs, ix }) => {
  tabs = tabs.map(tab => {
    const { active, ...rest } = tab;
    return rest;
  });

  tabs[ix].active = true;
  setTabs(tabs);
};

export const Tabs = ({ tabs, setTabs, tabProps, ...props }) => (
  <StyledTab {...props}>
    <div>
      {tabs.map((tab, ix) => (
        <Tab
          active={tab.active}
          key={ix}
          onClick={e => changeTab({ tabs, setTabs, ix })}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
    <TabContainer>
      {tabs.map((tab, ix) => (
        <TabContent key={ix} active={tab.active}>
          {tab.rendered(tabProps)}
        </TabContent>
      ))}
    </TabContainer>
  </StyledTab>
);
