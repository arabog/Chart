import "./home.css"
import Chart from "../../components/chart/Chart" 
import { userData } from "../../dummyData"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"


export default function Home() {
          return (
                    <div>
                              <FeaturedInfo />

                              <Chart 
                                        title="User Analytics"
                                        data = {userData}
                                        grid dataKey = "Active User"
                              />
                    </div>
          )
}
