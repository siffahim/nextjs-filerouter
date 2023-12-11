import RootLayout from "@/components/Layouts/RootLayout";

const NewsPage = () => {
  return (
    <div>
      <h1>This is news page</h1>
    </div>
  );
};

export default NewsPage;

NewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
