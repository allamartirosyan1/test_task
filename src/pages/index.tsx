import MainContainer from "../components/main-container";
import useAmout from "../hooks/useAmout";
import sharedData from "../shared/data/data";
import { Table } from "antd";
import moment from "moment";
import { DataModel } from "../shared/models/data-model";

const Index = () => {
  const { convertIntoNumber } = useAmout();
  const columns: any = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      sorter: (a: DataModel, b: DataModel) => Number(a.id) - Number(b.id),
    },
    {
      key: "2",
      title: "Title",
      dataIndex: "title",
      sorter: (a: DataModel, b: DataModel) => a.title.localeCompare(b.title),
    },
    {
      key: "3",
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a: DataModel, b: DataModel) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
      render: (date: string) => moment(date).format("ll"),
    },
    {
      key: "4",
      title: "Type",
      dataIndex: "type",
    },
    {
      key: "5",
      title: "Sub Type",
      dataIndex: "subType",
      filters: [
        { text: "loans", value: "loans" },
        { text: "credit", value: "credit" },
      ],
      onFilter: (value: string, data: DataModel) => data.subType === value,
    },
    {
      key: "6",
      title: "Additional Information",
      dataIndex: "additionalInformation",
      sorter: (a: DataModel, b: DataModel) => {
        const aSum = convertIntoNumber(`${a.additionalInformation[0]}`);
        const bSum = convertIntoNumber(`${b.additionalInformation[0]}`);
        return aSum - bSum;
      },
      render: (amount: string) => <p>{amount[0]}</p>,
    },
  ];

  return (
    <MainContainer keywords="Main Page" title="Main Page">
      <div className="p-1">
        <Table columns={columns} dataSource={sharedData}></Table>
      </div>
    </MainContainer>
  );
};

export default Index;
