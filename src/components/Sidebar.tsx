import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiAbstract } from 'react-icons/si';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import AppContext from '../context/AppContext';

import {
  TbFileFilled,
  TbTypography,
  TbAppWindowFilled,
  TbForms,
  TbBellFilled,
  TbWashDryShade,
  TbArrowAutofitContentFilled,
  TbTable,
  TbChartCandleFilled,
} from 'react-icons/tb';
import { MdSmartButton } from 'react-icons/md';

const data = [
  {
    label: 'Getting Started',
    icon: 'TbFileFilled',
  },
  {
    label: 'Typography',
    icon: 'TbTypography',
    children: ['Text Formatting', 'Color and Styling'],
  },
  {
    label: 'Showcase',
    icon: 'TbAppWindowFilled',
    children: ['Twitter', 'Google'],
  },
  {
    label: 'Forms and Inputs',
    icon: 'TbForms',
    children: ['Buttons', 'Text Fields', 'Selection Inputs', 'Range Inputs', 'Date and Time', 'Miscellaneous'],
  },
  {
    label: 'Notifications',
    icon: 'TbBellFilled',
    children: ['Alert', 'Toast', 'Snackbar', 'Dialog'],
  },
  {
    label: 'Cards',
    icon: 'TbWashDryShade',
  },
  {
    label: 'Layouts',
    icon: 'TbArrowAutofitContentFilled',
    children: ['Container', 'Grid', 'Flexbox', 'Design Utilities', 'Sticky'],
  },
  {
    label: 'Data Display',
    icon: 'TbTable',
    children: ['Table', 'List', 'Accordion', 'Tabs'],
  },
  {
    label: 'Utilities',
    icon: 'TbChartCandleFilled',
    children: ['Borders', 'Sizing', 'Layout', 'Spacing', 'Interactivity'],
  },
];

function getTitleIcon (name: string) {
  if ( name === 'TbFileFilled' ) return <TbFileFilled className='icon' />
  if ( name === 'TbTypography' ) return <TbTypography className='icon' />
  if ( name === 'TbAppWindowFilled' ) return <TbAppWindowFilled className='icon' />
  if ( name === 'TbForms' ) return <TbForms className='icon' />
  if ( name === 'TbBellFilled' ) return <TbBellFilled className='icon' />
  if ( name === 'TbWashDryShade' ) return <TbWashDryShade className='icon' />
  if ( name === 'TbArrowAutofitContentFilled' ) return <TbArrowAutofitContentFilled className='icon' />
  if ( name === 'TbTable' ) return <TbTable className='icon' />
  if ( name === 'TbChartCandleFilled' ) return <TbChartCandleFilled className='icon' />
  return <MdSmartButton className='icon' />
}

const Sidebar = () => {
  const {sidebarActive } = useContext(AppContext);
  const [caretStates, setCaretStates] = useState(Array(data.length).fill(false));
  const navigate = useNavigate();

  const toggleCaret = (index: number) => {
    const updatedStates = [...caretStates];
    updatedStates[index] = !updatedStates[index];
    setCaretStates(updatedStates);
  };

  const handleClick = (item: string, index: number, hasChildren : boolean) => {
    if (hasChildren) toggleCaret(index);
    else navigate(`/${item.toLowerCase().replaceAll(' ', '-')}`);
  }

  return (
    <aside className={`sidebar ${sidebarActive ? '' : 'inactive'}`}>
      <header className='heading pointer' onClick={() => navigate('/')}>
        <SiAbstract />
        <h1>Flexcore</h1>
      </header>
      <ul className='tree-view'>
        {data.map((item, index) => (
          <li key={index}>
            <span
              className='caret'
              onClick={() => handleClick(item.label, index, item.children !== undefined)}
            >
              <div className='title'>
                {getTitleIcon(item.icon)}
                {item.label}
              </div>
              {item.children && item.children.length > 0 && caretStates[index] ? (
                <IoIosArrowDown />
              ) : (
                  item.children && item.children.length > 0 && <IoIosArrowForward />
                )}
            </span>
            {item.children && (
              <ul className={`${caretStates[index] ? 'active' : 'inactive'}`}>
                {item.children.map((child, childIndex) => (
                  <li
                    className='caret-child'
                    key={childIndex}
                    onClick={() => navigate(`/${item.label.toLowerCase().replaceAll(' ', '-')}/${child.toLowerCase().replaceAll(' ', '-')}`)}
                  >
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
