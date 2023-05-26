import React, { useState } from 'react';
import { FcPuzzle } from 'react-icons/fc';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

import {
  FcBinoculars,
  FcIdea,
  FcCalendar,
  FcCollaboration,
  FcWorkflow,
  FcDocument,
  FcBrokenLink,
  FcCalculator,
} from 'react-icons/fc';
import { MdSmartButton } from 'react-icons/md';

const data = [
  {
    label: 'Overview',
    icon: 'FcBinoculars',
  },
  {
    label: 'Basic',
    icon: 'FcIdea',
    children: ['Button', 'Checkbox'],
  },
  {
    label: 'Data Display',
    icon: 'FcCalendar',
    children: ['Avatar', 'Badge', 'Divider', 'List'],
  },
  {
    label: 'Feedback',
    icon: 'FcCollaboration',
  },
  {
    label: 'Navigation',
    icon: 'FcBrokenLink',
    children: ['Avatar', 'Badge', 'Divider', 'List'],
  },
  {
    label: 'Layout',
    icon: 'FcCalculator',
    children: ['Avatar', 'Badge', 'Divider', 'List'],
  },
  {
    label: 'Utils',
    icon: 'FcWorkflow',
  },
  {
    label: 'Pages',
    icon: 'FcDocument',
    children: ['Avatar', 'Badge', 'Divider', 'List'],
  },
];

function getTitleIcon (name: string) {
  if ( name === 'FcBinoculars' ) return <FcBinoculars className='icon' />
  if ( name === 'FcIdea' ) return <FcIdea className='icon' />
  if ( name === 'FcCalendar' ) return <FcCalendar className='icon' />
  if ( name === 'FcCollaboration' ) return <FcCollaboration className='icon' />
  if ( name === 'FcWorkflow' ) return <FcWorkflow className='icon' />
  if ( name === 'FcDocument' ) return <FcDocument className='icon' />
  if ( name === 'FcBrokenLink' ) return <FcBrokenLink className='icon' />
  if ( name === 'FcCalculator' ) return <FcCalculator className='icon' />
  return <MdSmartButton className='icon' />
}

interface SidebarProps {
  sidebarActive: boolean;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarActive, setSidebarActive }: SidebarProps) => {
  const [caretStates, setCaretStates] = useState(Array(data.length).fill(false));

  const toggleCaret = (index: number) => {
    const updatedStates = [...caretStates];
    updatedStates[index] = !updatedStates[index];
    setCaretStates(updatedStates);
  };

  return (
    <aside className={`${sidebarActive ? '' : 'inactive'}`}>
      <div className='logo'>
        <FcPuzzle />
        <div>
          <span className='heading'>
            <h1>UI Library</h1>
          </span>
          <p>A collection of prebuilt elements ready for production.</p>
        </div>
      </div>
      <div onClick={() => setSidebarActive(true)}>
        <div className="search">
          <input type="text" placeholder=" " />
          <div>
            <svg>
              <use xlinkHref="#path">
              </use>
            </svg>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
            <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)" />
          </symbol>
        </svg>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <span
              className={`caret ${item.children ? '' : 'no-children'}`}
              onClick={() => toggleCaret(index)}
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
                  <li className='caret-child' key={childIndex}>
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
