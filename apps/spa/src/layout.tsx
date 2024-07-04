import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  MenuItemProps,
  ExtensionSlot,
} from 'piral';
import { UpdateDialog } from 'piral-update';
import { getCurrentUser, logoutCurrentUser } from './auth';

const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="nav-item">{children}</li>;

function logout(e: React.SyntheticEvent) {
  e.preventDefault();
  logoutCurrentUser();
}

const showSimpleLogout = () => {
  return (
    <a className="nav-link text-dark" href="#" onClick={logout}>
      Logout
    </a>
  );
};

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <ExtensionSlot
        name="user-profile-menu"
        empty={showSimpleLogout}
        params={{ user: getCurrentUser(), logout: logoutCurrentUser }}
      />
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
  LoadingIndicator: () => (
    <div className="app-center">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div>
      <h1>Hello, {getCurrentUser().name}!</h1>
      <p>Welcome to the DWX 24 demo web app.</p>
      <div className="tiles">{children}</div>
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
    <>
      <Notifications />
      <Menu type="general" />
      <UpdateDialog />
      <div className="container app-content">{children}</div>
      <footer>
        <div className="container">
          &copy; Florian Rappl, 2004.{' '}
          <a href="https://www.flaticon.com/free-icons/person" title="person icons" target="_blank">
            Person icons created by Freepik - Flaticon
          </a>
        </div>
      </footer>
    </>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              DWX 24 Demos
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
