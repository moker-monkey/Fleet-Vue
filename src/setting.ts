export enum size {
    mini = 'mini',
    small = 'small',
    medium = 'medium',
    large = 'large'
}

// 应该分为多个部分，以便于后续查找

interface system {
    name: string; // Overrides the default title
    menuType: string; // options with 'online' or 'local'
}

interface MySettings {
    system: system;
    showSettings: boolean // Controls settings panel display
    showTagsView: boolean // Controls tagsview display
    showSidebarLogo: boolean // Controls siderbar logo display
    fixedHeader: boolean // If true, will fix the header component
    errorLog: string[] // The env to enable the errorlog component, default 'production' only
    sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
    devServerPort: number // Port number for webpack-dev-server
    mockServerPort: number // Port number for mock server,
    elSize: size
}

const MySettings = {
    system: {
        name: 'api-ui',
        menuType: process.env.NODE_ENV === 'development' ? 'local' : 'online'
    },
    fixedHeader: true,
    showSettings: true,
    showTagsView: true,
    showSidebarLogo: true,
    sidebarTextTheme: true,
    elSize: size.medium
}
export default MySettings;
