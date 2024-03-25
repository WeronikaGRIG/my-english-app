
import TableList from '../TableList/TableList';
import { list } from '../../list';
import './Table.css';


export default function Table() {
    return <div className='table'>
        <div className="container">
            <table className="table__wrapper">
                <tbody>
                    <td><strong> # </strong></td>
                    <td><strong>Слово</strong></td>
                    <td><strong>Транскрипция</strong></td>
                    <td><strong>Перевод</strong></td>

                    {list.map((table, i) => {
                        return (
                            <TableList key={i} {...table} />
                        )
                    })}
                </tbody>
            </table>
        </div>

    </div>;
}
