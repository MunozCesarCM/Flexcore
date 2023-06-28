interface ClassTable {
  tableItems: any,
}

const ClassTable = ({ tableItems }: ClassTable ) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.body.map((item: {title: string, desc:string}) => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>{item.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClassTable;
