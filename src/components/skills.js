import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import useCvData from './cvData'
// import { Dump } from '../util/helpers'
import {
  ItemWrapper as IW,
  StyledLi as LI,
  StyledList as SL,
  StyledSpan as SS,
} from './shared'

const SkillsWrapper = styled(IW)`
  grid-area: sk;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const SkillHeader = styled(SS)`
  margin: 0rem;
  padding: 0rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
`

const StyledList = styled(SL)``

const StyledLi = styled(LI)``

export const Skills = () => {
  const { skills } = useCvData()
  // console.log('=====================')
  // console.log(this.props)
  // console.log('=====================')
  return (
    <SkillsWrapper>
      <ContentWrapper>
        {/* <Dump props={skills} /> */}
        {Object.keys(skills).map((key, index) => {
          return (
            <React.Fragment key={index}>
              <SkillHeader>
                <StyledList data-tip="Skills Detail">
                  {skills[key].name}
                </StyledList>
              </SkillHeader>
              {skills[key].keywords.map((key, index) => {
                return <StyledLi key={key + index}>{key}</StyledLi>
              })}
            </React.Fragment>
          )
        })}
      </ContentWrapper>
      <ReactTooltip />
    </SkillsWrapper>
  )
}
