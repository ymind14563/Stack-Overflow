import Article from './Article';
import styled from 'styled-components';
import CardHeader from './CardHeader';
const MainContainer = styled.div`
  width: 100%;
  @media (max-width: 980px) {
    padding-left: 30px;
  }
`;
const Box = styled.div`
  height: 300px;
  width: 100%;
  border: 1px solid var(--menu-hover-background);
  border-radius: 5px;
`;
const Box1 = styled(Box)`
  max-width: 365px;
  height: 300px;
  @media (max-width: 980px) {
    min-width: 610px;
  }
`;
const Box2 = styled(Box)`
  max-width: 300px;
  width: 100%;
  @media (max-width: 980px) {
    min-width: 610px;
  }
`;
const Box3 = styled(Box)`
  max-width: 205px;
  width: 100%;
  @media (max-width: 980px) {
    min-width: 610px;
  }
`;

const SummaryContentsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2.5fr 1.6fr;
  grid-column-gap: 20px;
  @media only screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 0px;
  }
  width: 100%;
`;
const ShortContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 30px;
  @media (max-width: 1265px) {
    grid-template-columns: 1fr;
  }
  width: 100%;
`;
const LongContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

const Myinfo_Main = () => {
  const option1 = ['score', 'Activity', 'Newest'];
  const option2 = ['score', 'Activity', 'Newest', 'Views'];
  const option3 = ['score', 'Activity', 'Newest', 'Added'];
  const option4 = ['Active', 'Offered', 'Earned'];
  const option5 = ['score', 'Activity', 'Newest', 'Views'];
  return (
    <MainContainer>
      <div className="flex-col">
        <CardHeader title="Summary" />
        <SummaryContentsContainer>
          <Box1 className="mypage-col-style"></Box1>
          <Box2 className="mypage-col-style"></Box2>
          <Box3 className="mypage-col-style"></Box3>
        </SummaryContentsContainer>
      </div>
      <ShortContainer>
        <Article title="Answers" options={option1} />
        <Article title="Questions" options={option2} />
        <Article title="Tags" isFilter={false} />
        <Article title="Requtation" isFilter={false} />
      </ShortContainer>
      <LongContainer>
        <Article title="Budges" options={option3} />
        <Article title="Followed posts" options={option4} />
        <Article title="Active bounties" isFilter={false} />
        <Article title="Articles" options={option5} />
        <Article title="Votes cast" isFilter={false} />
      </LongContainer>
    </MainContainer>
  );
};

export default Myinfo_Main;
