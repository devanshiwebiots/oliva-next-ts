import { Row, TabContent, TabPane } from "reactstrap";
import AboutTab from "./AboutTab/AboutTab";
import TimelineTab from "./TimeLineTab/TimelineTab";
import AllCards from "./AllCards";
import PhotosTab from "./PhotosTab";
import { SocialAppTabContentProp } from "@/Types/SocialAppType";

const SocialAppTabContent :React.FC<SocialAppTabContentProp> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab} className="tab-content">
      <TabPane tabId={1}>
        <TimelineTab />
      </TabPane>
      <TabPane tabId={2}>
        <AboutTab />
      </TabPane>
      <TabPane tabId={3}>
        <Row>
          <AllCards />
        </Row>
      </TabPane>
      <TabPane tabId={4}>
        <Row>
          <PhotosTab />
        </Row>
      </TabPane>
    </TabContent>
  );
};

export default SocialAppTabContent;
