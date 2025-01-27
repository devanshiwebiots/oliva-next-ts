import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { ClipboardTextInput, Copy, Cut, CutAndCopyText, CutAndCopyTextPlaceholder } from "@/Constant/constant";
import { useState } from "react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { toast } from "react-toastify";

const ClipboardOnTextInput = () => {
  const [clipboardTextValue, setClipboardTextValue] = useState({ value: "", copied: false });
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextValue.value);
      setClipboardTextValue({ value: clipboardTextValue.value, copied: true });
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(clipboardTextValue.value);
      setClipboardTextValue({ value: "", copied: false });
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipboardTextInput} headClass="pb-0" />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{CutAndCopyText}</p>
            <Input id="clipboardExample1" type="text" placeholder={CutAndCopyTextPlaceholder} value={clipboardTextValue.value} onChange={({ target: { value } }) => setClipboardTextValue({ value, copied: false })} />
            <div className="mt-3 text-end">
              <Button color="primary" className="btn-clipboard me-1">
                <i className="fa fa-copy" onClick={handleCopy}></i> {Copy}
              </Button>
              <Button color="secondary" className="btn-clipboard-cut">
                <i className="fa fa-cut" onClick={handleCut}></i> {Cut}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnTextInput;
