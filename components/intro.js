import styled from 'styled-components';

const Name = styled.div`
    font-family: stolzl, sans-serif;
    font-weight: 400;
    font-size: 7rem;
    font-style: normal;
    text-align: center;
    padding-top: 8rem;
    color: var(--lightTheme);
    line-height: 1;
`;

const Tag = styled.div`
    font-weight: 400;
    font-size: 2.5rem;
    font-style: normal;
    text-align:center;
    color: var(--lightTheme);
    padding-top: 0px;
`;

export default function Intro({homePage}) {
  return (
    <section>
      <Name>{homePage.name}</Name>
      <Tag>{homePage.tagline}</Tag>
    </section>
  );
}
