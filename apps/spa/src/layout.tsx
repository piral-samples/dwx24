import * as React from 'react';
import { Link } from 'react-router-dom';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps } from 'piral';
import { getCurrentUser, logoutCurrentUser } from './auth';
import { UpdateDialog } from 'piral-update';

const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="nav-item">{children}</li>;

function logout(e: React.SyntheticEvent) {
  e.preventDefault();
  logoutCurrentUser();
}

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <a className="nav-link text-dark" href="#" onClick={logout}>
        Logout
      </a>
    </MenuItem>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div>
      <h1>Hello, {getCurrentUser().name}!</h1>
      <p>Welcome to the DWX 24 demo web app.</p>
      <div className="tiles">
        {children}
      </div>
    </div>
  ),
  UpdateDialog: ({ onApprove, onReject }) => (
    <div>
      <p>
        <b>New update ready!</b>
      </p>
      <button onClick={onReject}>Skip</button>
      <button onClick={onApprove}>Install</button>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>,
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      <UpdateDialog />
      <div className="container">{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              DWX 24 Demo
            </Link>
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler mr-2">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${collapsed ? '' : 'show'}`}
              aria-expanded={!collapsed}>
              <ul className="navbar-nav flex-grow">
                {children}
                {defaultMenuItems}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};
