import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const handleCategoryClick = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home": 
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;        
    }
  };

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-screen py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""}`}>
      <div className="flex flex-col px-5 h-full">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  handleCategoryClick(item.name, item.type);
                  navigate("/");
                }
                }
                className={`${selectCategories === item.name ? "bg-white/[0.15]" : ""}`}
              />
              {item.divider && (
                <hr className='my-5 border-slate-300' />
              )}
            </React.Fragment>
          );
        })}
        <hr className='my-5 border-slate-300' />
        <div className='text-white/[0.5] text-[12px]'>
          Clone By: Hardik Sharma
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
