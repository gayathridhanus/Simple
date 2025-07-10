
export const Person = (props) => {
  return (
    <div className="persond">
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>CGPA</th>
                <td>{props.CGPA}</td>
            </tr>
            <tr>
                <th>IsEligible to vote</th>
                <td>{props.voting?"Yes":"No"}</td>
            </tr>
        </table>
    </div>
  )
}
