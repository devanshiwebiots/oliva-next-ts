import { Button, Card, CardBody, Col, ListInlineItem, Row } from "reactstrap";
import {  HorizontalTimelines, Href, ReadMore } from "@/Constant/constant";
import { HorizontalTimeLineData, HorizontalTimeLineDataList } from "@/Data/BonusUi/Timeline/TimelineData";
import { HorizontalTimelineProp } from "@/Types/BonusUiType";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HorizontalTimeline = () => {
  return (
    <Col xxl="8" xl="7" className="box-col-12">
      <Card>
        <CommonCardHeader title={HorizontalTimelines} subTitle={HorizontalTimeLineData} />
        <CardBody>
          {HorizontalTimeLineDataList.map(({ mainClass, child }: HorizontalTimelineProp, index) => (
            <Row className={`list-inline events timeline-list ${mainClass}`} key={index}>
              {child.map(({ colClass, color, date, header, paragraph, verticalLine1, verticalLine2 }, index) => (
                <Col xxl="4" className={colClass} key={index}>
                  <div>
                    {verticalLine2 && <div className={verticalLine2}></div>}
                    <ListInlineItem className="event-list">
                      <div className="px-4">
                        <div className={`event-date alert-light-${color} txt-${color}`}>{date}</div>
                        <h5>{header} </h5>
                        <p className="text-muted">{paragraph}</p>
                        <div className="read-more-btn"><Button color="primary" tag="a" href={Href} className="px-3">{ReadMore}</Button></div>
                      </div>
                    </ListInlineItem>
                    {verticalLine1 && <div className={verticalLine1}></div>}
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalTimeline;
