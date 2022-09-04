import { TOCData } from '../../types';

type Props_TableOfContent = {
  tableOfContent: TOCData[];
};

const TableOfContent = (props: Props_TableOfContent): JSX.Element => {
  const { tableOfContent } = props;
  return (
    <div className="shadow-sm rounded-xl mb-6 bg-white ">
      <h1 className="pl-4 pt-4 pb-2 border-b text-xl text-sky-900">目次</h1>
      <div className="p-4">
        <ul className="ul_h2 ul_h3">
          {tableOfContent.map((anchor: TOCData) => {
            if (anchor.level === 'H2') {
              return (
                <li className="li_h2" key={anchor.href}>
                  <a href={anchor.href}>{anchor.title}</a>
                </li>
              );
            } else {
              return (
                <li className="li_h3" key={anchor.href}>
                  <a href={anchor.href}>{anchor.title}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContent;
