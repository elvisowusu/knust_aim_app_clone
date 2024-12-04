import { Table } from "../../../../utils/bills/Table";

export const StudentDocuments = () => {
  const documentDetails = [{ name: "Admission Letter", action: "view" }];
  return (
    <div>
      <Table
        style={"font-normal border-none"}
        headers={["File Name", "Action"]}
        data={documentDetails.map((item) => [item.name, item.action])}
      />
    </div>
  );
};
