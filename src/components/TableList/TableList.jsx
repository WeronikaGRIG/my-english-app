

export default function TableList({ word, transcript, translation }) {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td><p>{word}</p></td>
            <td><p>{transcript}</p></td>
            <td><p>{translation}</p></td>
        </tr>
    )
}
