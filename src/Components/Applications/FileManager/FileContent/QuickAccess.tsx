import { QuickAccessTitle } from "@/Constant/constant";
import { QuickAccessData } from "@/Data/Applications/FileManager/FileManagerData";

const QuickAccess = () => {
  return (
    <>
      <h5>{QuickAccessTitle}</h5>
      <ul className='quick-file d-flex flex-row mt-2'>
        {QuickAccessData.map((item, i) => (
          <li key={i}>
            <div className='quick-box'>{item.icon}</div>
            <h6>{item.title}</h6>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuickAccess;
