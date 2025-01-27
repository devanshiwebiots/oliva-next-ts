import { TooltipProp } from '@/Types/EcommerceType';
import React, { Fragment, useState } from 'react'
import { Label, Tooltip } from 'reactstrap';

const ToolTip: React.FC<TooltipProp> = ({ labelText, tooltip, targetId }) => {
    const [hoverTool, setHoverTool] = useState(false);
    const hoverToggle = () => setHoverTool(!hoverTool);
    return (
        <Fragment>
            <Label>{labelText}<i className="icon-help-alt ms-1" id={targetId}></i></Label>
            <Tooltip placement="top" isOpen={hoverTool} target={targetId} toggle={hoverToggle}>
                {tooltip}
            </Tooltip>
        </Fragment>
    )
}
export default ToolTip;