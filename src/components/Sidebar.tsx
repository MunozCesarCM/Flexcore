import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiAbstract } from 'react-icons/si';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { TbX } from 'react-icons/tb';
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
    children: ['Google', 'Twitter'],
  },
  {
    label: 'Forms and Inputs',
    icon: 'TbForms',
    // children: ['Buttons', 'Text Fields', 'Selection Inputs', 'Range Inputs', 'Date and Time', 'Miscellaneous'],
    children: ['Buttons', 'Text Fields'],
  },
  // {
  //   label: 'Notifications',
  //   icon: 'TbBellFilled',
  //   children: ['Alert', 'Toast', 'Snackbar', 'Dialog'],
  // },
  // {
  //   label: 'Cards',
  //   icon: 'TbWashDryShade',
  // },
  {
    label: 'Layouts',
    icon: 'TbArrowAutofitContentFilled',
    // children: ['Container', 'Grid', 'Flexbox', 'Design Utilities', 'Sticky'],
    children: ['Container', 'Flexbox'],
  },
  // {
  //   label: 'Data Display',
  //   icon: 'TbTable',
  //   children: ['Table', 'List', 'Accordion', 'Tabs'],
  // },
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
  const {sidebarActive, setSidebarActive} = useContext(AppContext);
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
    <aside className={`sidebar h-screen pb-10 fixed z-20 overflow-y-scroll border-0 border-r border-neutral-200 dark:border-neutral-800 ${sidebarActive ? '' : 'hidden'}`}>
      <header className='heading py-4 px-5 h-16 flex justify-between items-center border-0 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer'>
        <div className='title flex items-center' onClick={() => navigate('/')}>
          <SiAbstract className='block w-8 h-8 text-primary' />
          <h1 className='pl-4 text-xl weight-700 letter-wide'>Flexcore</h1>
        </div>
        <TbX onClick={() => setSidebarActive(!sidebarActive)} className='close-icon' />
      </header>
      <ul className='tree-view list-none p-0 m-0'>
        {data.map((item, index) => (
          <li key={index}>
            <span
              className='caret text-header weight-400 my-1 mx-4 p-3 flex justify-between items-center rounded cursor-pointer select-none duration-50'
              onClick={() => handleClick(item.label, index, item.children !== undefined)}
            >
              <div className='flex items-center'>
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
              <ul className={`list-none ${caretStates[index] ? 'visible' : 'hidden'}`}>
                {item.children.map((child, childIndex) => (
                  <li
                    className='caret-child text-normal weight-400 my-1 mr-4 ml-12 p-3 rounded cursor-pointer duration-50'
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
