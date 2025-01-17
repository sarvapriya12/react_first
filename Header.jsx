

import NavBar from './NavBar.jsx'
function Header() {
    return (
        <div>
            <div className="header">
                <h1>Mental Health</h1>
            </div>

            <div className="intro-section">
                <div className="main-content">
                    <p>Mental health is a state of mental well-being that enables people to cope with the stresses of life...</p>
                    <p>At any one time, a diverse set of individual, family, community, and structural factors...</p>
                </div>

                <NavBar></NavBar>
            </div>

            <div className="main-content">
                <h2>Latest News</h2>
                <div className="news-grid">
                    <div className="news-card">
                        <h3>STEPS Report on Mental Health</h3>
                        <p>Addressing the Growing Challenge of Mental Health...</p>
                        <span>19 November 2024</span>
                    </div>
                    <div className="news-card">
                        <h3>New WHO Framework</h3>
                        <p>WHO releases new framework and advocacy strategy...</p>
                        <span>21 October 2024</span>
                    </div>
                    <div className="news-card">
                        <h3>Children's Mental Health</h3>
                        <p>WHO and UNICEF release guidance to improve access...</p>
                        <span>9 October 2024</span>
                    </div>
                </div>

                <h2>Latest Publications</h2>
                <div className="publication-grid">
                    <div className="publication-card">
                        <img src="/api/placeholder/300/200" alt="Mental health publication cover" />
                        <h3>Transforming Mental Health</h3>
                        <p>WHO South-East Asia Region Report</p>
                        <a href="#" className="button">Download</a>
                    </div>
                    <div className="publication-card">
                        <img src="/api/placeholder/300/200" alt="Psychological first aid guide cover" />
                        <h3>Psychological First Aid</h3>
                        <p>During Ebola Virus Disease Outbreaks...</p>
                        <a href="#" className="button">Download</a>
                    </div>
                    <div className="publication-card">
                        <img src="/api/placeholder/300/200" alt="Neurology report cover" />
                        <h3>Neurology and COVID-19</h3>
                        <p>Scientific Brief, 20 August 2024</p>
                        <a href="#" className="button">Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
