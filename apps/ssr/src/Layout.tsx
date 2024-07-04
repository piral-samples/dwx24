import * as React from 'react';
import cssText from './style.scss';

export interface LayoutProps {
  route: string;
}

const Layout: React.FC<LayoutProps> = ({ route }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#212121" />
        <meta name="theme-color" content="#e6020c" />
        <title>DWX 24 SSR Demo</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <style dangerouslySetInnerHTML={{ __html: cssText }} />
        <pi-part name="style" />
      </head>
      <body>
        <div id="app">
          <header>
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">
                  DWX 24 SSR
                </a>
                <div className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse show`} aria-expanded>
                  <ul className="navbar-nav flex-grow">
                    <pi-slot name="general-menu" />
                    <li>
                      <pi-slot
                        name="user-profile-menu"
                        data={JSON.stringify({ user: { id: 'system', name: 'System', role: '', icon: '/robot.png' } })}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div className="container app-content">
            <pi-slot rel="router" name={`page:${route}`} />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
