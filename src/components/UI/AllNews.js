import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "50px 0px",
          fontSize: "40px",
        }}
      >
        #TODAY HIGHLIGHTS
      </h1>
      <Row gutter={16}>
        {allNews.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              cover={
                <Image
                  alt="example"
                  src={news?.image_url}
                  width={500}
                  height={250}
                  responsive
                />
              }
            >
              <Meta title={news?.title} />
              <div>
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

                <p style={{ fontSize: "20px" }}>
                  {news?.description.slice(0, 80)}...
                </p>
                <Link href={`/news/${news?.id}`}>
                  <p
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      margin: "20px 0px",
                      backgroundColor: "black",
                      color: "white",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                    }}
                  >
                    Keep Reading <ArrowRightOutlined />
                  </p>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllNews;
