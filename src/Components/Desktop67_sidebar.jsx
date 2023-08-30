import React from "react";
import Academics from "../images/Desktop67/academics.png";
import down_arr from "../images/Desktop67/down-arrow.png";
import Accounts from "../images/Desktop67/Accounts.png";
import Admin from "../images/Desktop67/Admin.png";
import Student from "../images/Desktop67/Student.png";
import Examination from "../images/Desktop67/Examination.png";
import HR from "../images/Desktop67/HR.png";
import Leaves from "../images/Desktop67/Leaves.png";
import Dashboard from "../images/Desktop67/Dashboard.png";
import Utilities from "../images/Desktop67/Utilities.png";
import Reports from "../images/Desktop67/Report.png";
import Settings from "../images/Desktop67/Settings.png";
import Modules from "../images/Desktop67/Modules.png";
import ellip from "../images/Desktop67/Ellipse 218.png";
import boy from "../Utils/Images/boy-photo.png";
import "../CSS/Desktop67_sidebar.css";
import { connect } from 'react-redux';


function Desktop67_sidebar({ act_st,  handle_act_st,  act_sub_st,  handle_sub_act_st,}) {
  return (
    <div className="sidebar hidden md:flex md:flex-col pl-8 ">
      <div className="sidebar_heading relative w-fit px-4 py-4 mt-4">
        <img src={ellip} alt="ellip" className="ellip1 absolute" />
        <img src={ellip} alt="ellip" className="ellip2 absolute" />
        Admin&nbsp;Pannel
      </div>
      <div className="flex-1 flex flex-col justify-between">
      <ul className="mt-6 w-fit ">
        <li
          className={
            act_st === "Dashboard"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Dashboard");
            handle_sub_act_st("");
          }}
        >
          <img src={Dashboard} className="inline mr-5 w-5" alt="dashboard" />
          Dashboard  <img
              src={down_arr}
              alt="down-arrow"
              className={act_st === "Accounts" ? "inline w-3 ml-8" : "hidden"}
            />
        </li>
        <li>
          <div className={act_st === "Dashboard" ? "block" : "hidden"}>
            <ul className="Account-list pl-8 text-left">
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Dashboard");
                }}
              >
                <span
                  className={
                    act_sub_st === "Dashboard" ? "opacity-50" : ""
                  }
                >
                  Dashboard
                </span>
              </li>
                 <li
                  className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                  onClick={() => {
                    handle_sub_act_st("Dashboard2");
                  }}
                >
                  <span
                    className={
                      act_sub_st === "Dashboard2" ? "opacity-50" : ""
                    }
                  >
                    Dashboard2
                  </span>
                </li>
            </ul>
          </div>
        </li>


        <li
          className={
            act_st === "Admin"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Admin");
            handle_sub_act_st("");
          }}
        >
          <img src={Admin} className="inline mr-5 w-5" alt="dashboard" />
          Admin <img src={down_arr} alt="down-arrow" className= {act_st==="Admin" ? "inline w-3 ml-8" : "hidden"}/>
        </li>
        <li>
          <div className={act_st === "Admin" ? "block" : "hidden"}>
            <ul className="Account-list pl-8 text-left">
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("CreateID");
                }}
              >
                <span
                  className={
                    act_sub_st === "CreateID" ? "opacity-50" : ""
                  }
                >
                  CreateID
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("IdCard");
                }}
              >
                <span
                  className={
                    act_sub_st === "IdCard" ? "opacity-50" : ""
                  }
                >
                  IdCard
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Aquery");
                }}
              >
                <span
                  className={act_sub_st === "Aquery" ? "opacity-50" : ""}
                >
                  Admission Query
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Complaint");
                }}
              >
                <span
                  className={act_sub_st === "Complaint" ? "opacity-50" : ""}
                >
                  Complaint
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Postal");
                }}
              >
                <span
                  className={act_sub_st === "Postal" ? "opacity-50" : ""}
                >
                  Postal
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Visitor");
                }}
              >
                <span
                  className={act_sub_st === "Visitor" ? "opacity-50" : ""}
                >
                  Visitor
                </span>
              </li>
            </ul>
          </div>
        </li>

         
        <li
          className={
            act_st === "Academics"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Academics");
            handle_sub_act_st("");
          }}
        >
          <img src={Academics} className="inline mr-5 w-5" alt="dashboard" />
          Academics
        </li>
        <li
          className={
            act_st === "Study Material"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Study Material");
            handle_sub_act_st("");
          }}
        >
          <img src={Student} className="inline mr-5 w-5" alt="dashboard" />
          Study Material
        </li>
        <li
          className={
            act_st === "Student"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Student");
            handle_sub_act_st("");
          }}
        >
          <img src={Student} className="inline mr-5 w-5" alt="dashboard" />
          Student
        </li>
        <li
          className={
            act_st === "Examination"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Examination");
            handle_sub_act_st("");
          }}
        >
          <img src={Examination} className="inline mr-5 w-5" alt="dashboard" />
          Examination
        </li>
        <li
          className={
            act_st === "HR"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("HR");
            handle_sub_act_st("");
          }}
        >
          <img src={HR} className="inline mr-5  w-5" alt="dashboard" />
          HR
        </li>
        <li
          className={
            act_st === "Leaves"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Leaves");
            handle_sub_act_st("");
          }}
        >
          <img src={Leaves} className="inline mr-5 w-5" alt="dashboard" />
          Leaves
        </li>
        <li
          className={
            act_st === "Accounts"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Accounts");
            handle_sub_act_st("");
          }}
        > 
          <img src={Accounts} className="inline mr-5 w-5" alt="dashboard" />
          Accounts
        </li>
      
        <li
          className={
            act_st === "Utilities"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Utilities");
            handle_sub_act_st("");
          }}
        >
          <img src={Utilities} className="inline mr-5 w-5" alt="dashboard" />
          Utilities
          <img src={down_arr} alt="down-arrow" className= {act_st==="Utilities" ? "inline w-3 ml-8" : "hidden"}/>
        </li>
        <li>
          <div className={act_st === "Utilities" ? "block" : "hidden"}>
            <ul className="Account-list pl-8 text-left">
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("meeting");
                }}
              >
                <span
                  className={
                    act_sub_st === "meeting" ? "opacity-50" : ""
                  }
                >
                  meeting
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("chatroom");
                }}
              >
                <span
                  className={
                    act_sub_st === "chatroom" ? "opacity-50" : ""
                  }
                >
                  chatroom
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("videoconf");
                }}
              >
                <span
                  className={act_sub_st === "videoconf" ? "opacity-50" : ""}
                >
                 videoconf
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li
          className={
            act_st === "Reports"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Reports");
            handle_sub_act_st("");
          }}
        >
          <img src={Reports} className="inline mr-5 w-5" alt="dashboard" />
          Reports
        </li>
        <li
          className={
            act_st === "Settings"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Settings");
            handle_sub_act_st("");
          }}
        >
          <img src={Settings} className="inline mr-5 w-5" alt="dashboard" />
          Settings
        </li>
       
        <li
          className={
            act_st === "Modules"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Modules");
            handle_sub_act_st("");
          }}
        >
          <img src={Modules} className="inline mr-5 w-5" alt="dashboard" />
          Modules
        </li>
        
      </ul>
      <div className="sidebar-img  mt-0  flex items-end">
        <img src={boy} alt="boy" className=""/>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(Desktop67_sidebar);
