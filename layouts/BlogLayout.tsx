import {
  Box,
  Container,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Post } from "../constants/types";

type Props = {
  title: string;
  content: string;
  posts: Post[];
  date: string;
  slug: string;
};

export default function BlogLayout({
  title,
  content,
  posts,
  date,
  slug,
}: Props) {
  const [isBigScreen] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW="container.lg">
      <Box w="100%" p={6}>
        <Header />
        <Grid
          templateAreas={
            isBigScreen
              ? ` "nav main"
              "footer footer"`
              : `"nav"
              "main"
              "footer"`
          }
          gridTemplateColumns={isBigScreen ? "25% 1fr" : "1fr"}
          gap="1"
          color="blackAlpha.700"
        >
          <GridItem pl="2" area={"nav"}>
            <Nav posts={posts} slug={slug} mobile={!isBigScreen} />
          </GridItem>
          <GridItem pl="2" area={"main"}>
            <Head>
              <title>{title}</title>
            </Head>
            <Content title={title} content={content} date={date} />
          </GridItem>
          <GridItem pl="2" area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
