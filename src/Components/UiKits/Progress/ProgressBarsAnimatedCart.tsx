import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ProgressBarsAnimated } from "@/Constant/constant";
import { AnimatedData, AnimatedList } from "@/Data/Uikits/Progress/ProgressData";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const ProgressBarsAnimatedCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressBarsAnimated} subTitle={AnimatedData} headClass="pb-0" />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress color="primary" striped animated value="10" />
              {AnimatedList.map(({ color, value }, index) => (
                <Progress color={color} striped animated value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
