import { CreatedByMe, Href, Print } from "@/Constant/constant";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import CreatedByMeData from "./CreatedByMeData";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ListOfTask = () => {

  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{CreatedByMe}</h4>
        <a href={Href}>
          <Printer className="me-2" onClick={() => handlePrint()} />
          {Print}
        </a>
      </CardHeader>
      <CreatedByMeData componentRef={contentRef} />
    </Card>
  );
};

export default ListOfTask;
