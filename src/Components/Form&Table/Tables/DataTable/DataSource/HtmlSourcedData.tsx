import { Card, CardBody, Col, Input, Label } from "reactstrap";
import DataTable from "react-data-table-component";
import { HtmlTableTittle, SearchTableButton } from "@/Constant/constant";
import { HtmlColumnData as HtmlColumnData, HtmlColumn, HtmlData } from "@/Data/Form&Table/Table/DataTable/DataSourceData";
import { useMemo, useState } from "react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HtmlSourcedData = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = HtmlColumnData.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HtmlTableTittle} subTitle={HtmlData} headClass="pb-0 card-no-border" />
        <CardBody>
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={HtmlColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlSourcedData;
