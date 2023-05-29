import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiAbstract } from 'react-icons/si';
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
}

const Sidebar = ({ sidebarActive }: SidebarProps) => {
  const [caretStates, setCaretStates] = useState(Array(data.length).fill(false));
  const navigate = useNavigate();

  const toggleCaret = (index: number) => {
    const updatedStates = [...caretStates];
    updatedStates[index] = !updatedStates[index];
    setCaretStates(updatedStates);
  };

  const handleClick = (item: string, index: number, hasChildren : boolean) => {
    if (hasChildren) toggleCaret(index);
    else navigate(`/${item.toLowerCase()}`);
  }

  return (
    <aside className={`${sidebarActive ? '' : 'inactive'}`}>
      <div className='logo'>
        <SiAbstract onClick={() => navigate('/')} />
        <div>
          <span className='heading'>
            <h1>Brutal Blend</h1>
          </span>
          <p>A collection of prebuilt elements ready for production.</p>
        </div>
      </div>
      <ul>
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
                    onClick={() => navigate(`/${child.toLowerCase()}`)}
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
