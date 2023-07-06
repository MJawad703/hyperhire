import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import PostHeader from "./components/PostHeader/PostHeader";
import ProfileImage from "./assets/자산 9.png";
import PostBody from "./components/PostBody/PostBody";
import Tags from "./components/Tags/Tags";
import { tagsData, actionButtons } from "./constants/data";
import PostImage from "./components/PostImage/PostImage";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Comments from "./components/Comments/Comments";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app_container">
      <Container>
        <Header />
        <PostHeader
          profileImage={ProfileImage}
          postTitle="안녕 나 응애"
          postDescription="165cm . 53kg"
          helperText="1일전"
          actionButtonText="팔로우"
        />
        <PostBody
          title="지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?"
          description="지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
          혹시 어떤 상품이 제일 괜찮았어?

          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
          제일 재밌었다던데 맞아???

          올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
          아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
          있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!"
        />
        {/* <Tags tags={tagsData} /> */}
        <Tags tags={tagsData} />
        <PostImage />
        <ActionButtons actions={actionButtons} />
        <Comments
          postTitle="안녕 나 응애"
          helperText="1일전"
          comment="어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 
우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
꼭 봐주세용~!"
          likeCounts={5}
          commentsCount={5}
          reply="오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다"
        />
        <Footer text="댓글을 남겨주세요." helperText="등록" />
      </Container>
    </div>
  );
}

export default App;
