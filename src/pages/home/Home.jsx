import "./home.css"
import Chart from "../../components/chart/Chart" 
import { userData } from "../../dummyData"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

export default function Home() {
          return (
                    <div className="home">
                              <FeaturedInfo />

                              <Chart 
                                        title="User Analytics"
                                        data = {userData}
                                        grid dataKey = "Active User"
                              />

                              <div className="homeWidgets">
                                        <WidgetSm />
                                        <WidgetLg />
                              </div>
                    </div>
          )
}
