import RootLayout from "@/components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const NewsDetail = ({ news }) => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={12}>
        <Image
          alt="example"
          src={news?.image_url}
          width={800}
          height={500}
          responsive
        />
      </Col>
      <Col className="gutter-row" span={12}>
        <h1>{news?.title}</h1>

        <div
          className="line"
          style={{
            height: "5px",
            margin: "20px 0",
            background: "#000",
            width: "95%",
          }}
        ></div>

        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            color: "gray",
            margin: "10px 0px",
          }}
        >
          <span>
            <CalendarOutlined /> {news?.release_date}
          </span>
          <span>
            <CommentOutlined /> {news?.comment_count}
          </span>
          <span>
            <ProfileOutlined /> {news?.category}
          </span>
        </p>

        <p style={{ fontSize: "20px" }}>{news?.description}</p>
      </Col>
    </Row>
  );
};

export default NewsDetail;

NewsDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();

//   const paths = newses.map((news) => ({
//     params: { newsId: news.id.toString() },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
};
