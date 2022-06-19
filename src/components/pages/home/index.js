import Layout from "../../templates/layout";
import LastWorks from "../../templates/last_works";
import TimeCols from "../../templates/time_cols";
const Home = () => {
    return (
        <Layout title="YILMAZSMART">
            <TimeCols />
            <LastWorks />
        </Layout>
    );
};

export default Home;