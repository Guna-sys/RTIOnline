import React from 'react';
import './App.css';
import icon from './envelope-mail-svgrepo-com.svg'


function Dashboard({ user, goToDepartmentList }) {
    return (
        <>
            <nav className="navbar">
                <button>HOME</button>
                <button>CREATE DEPARTMENT</button>
                <button>CREATE NODAL OFFICER</button>
                <button>CREATE SPIO</button>
                <button>CREATE FAA</button>
            </nav>

            <main className="main-content dashboard">
                <p1><strong>Welcome to Admin Module of RTI-MIS</strong><br /></p1>
                <div className="role-info">

                    <p><strong>Public Authority: {user?.dept}</strong></p>

                    <p><strong>Role: {user?.role}</strong>
                    </p>
                    <p><strong>User: {user?.name}, {user?.designation} </strong></p>
                </div>

                <div className="card-grid">

                    <div className="card orange">
                        <img src={icon} alt="Icon"></img>
                        <nav>
                            Total Request(s)
                            2447
                        </nav>
                        <nav>
                            Disposed Off
                            1500
                        </nav>
                    </div>

                    <div className="card orange">
                        
                        <img src={icon} alt="Icon"></img>
                        <nav>
                            Total Appeal(s)
                            1000
                        </nav>

                        <nav>
                            Disposed Off
                            456
                        </nav>
                    </div>

                     <div className="card orange" onClick={goToDepartmentList} style={{ cursor: 'pointer' }}>
                        <img src={icon} alt="Icon"></img>
                       <nav> Departments Onboarded
                       <p>15</p> 
                        </nav>
                       
                    </div> 


                    <div className="card orange">
                        <img src={icon} alt="Icon"></img>
                        <nav>Total Nodal Officer
                        <p>15</p>
                        </nav>
                    </div>

                    <div className="card orange">
                        <img src={icon} alt="Icon"></img>
                        <nav>Total SPIO
                        <p>15</p>
                        </nav>
                    </div>

                    <div className="card orange">
                        <img src={icon} alt="Icon"></img>
                        <nav>Total First Appellate Authority
                        <p>15</p>
                        </nav>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Dashboard;
