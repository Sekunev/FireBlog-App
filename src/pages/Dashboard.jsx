import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/functions";
import loading from "../assets/loading-gif.gif";

const Dashboard = () => {
  const { isLoading, blogList } = useFetch();
  console.log(isLoading, blogList);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
      spacing={3}
      sx={{
        flexGrow: 1,
        marginTop: "6rem",
      }}
    >
      {isLoading && (
        <img src={loading} alt="" width={100} style={{ marginTop: "5rem" }} />
      )}
      {blogList?.map((item) => {
        return (
          <Grid item key={item.id}>
            <BlogCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dashboard;
