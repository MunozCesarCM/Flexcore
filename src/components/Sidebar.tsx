import React, { useState } from 'react';
import { FcPuzzle } from 'react-icons/fc';

const data = [
  {
    label: 'Beverages',
    children: ['Water', 'Coffee'],
  },
  {
    label: 'Other',
    children: ['Water', 'Coffee'],
  },
];

interface SidebarProps {
  sidebarActive: boolean;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarActive, setSidebarActive }: SidebarProps) => {
  const [caretStates, setCaretStates] = useState(Array(2).fill(false));

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
      <ul id="myUL">
        {data.map((item, index) => (
          <li key={index}>
            <span
              className={`caret ${caretStates[index] ? 'active caret-down' : ''}`}
              onClick={() => toggleCaret(index)}
            >
              {item.label}
            </span>
            <ul className={`nested ${caretStates[index] ? 'active' : ''}`}>
              {item.children.map((child, childIndex) => (
                <li key={childIndex}>{child}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
