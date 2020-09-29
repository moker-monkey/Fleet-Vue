enum elsize {
    default = '',
    mini = 'mini',
    small = 'small',
    medium = 'medium',
}

interface MySettings {
    system_name: string // Overrides the default title
    showSettings: boolean // Controls settings panel display
    showTagsView: boolean // Controls tagsview display
    showSidebarLogo: boolean // Controls siderbar logo display
    fixedHeader: boolean // If true, will fix the header component
    errorLog: string[] // The env to enable the errorlog component, default 'production' only
    sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
    devServerPort: number // Port number for webpack-dev-server
    mockServerPort: number // Port number for mock server,
    elSize: elsize
}

const MySettings = {
    system_name: 'api—ui',
    fixedHeader: true,
    showSettings: true,
    showTagsView: true,
    showSidebarLogo: true,
    sidebarTextTheme: true,
    elSize: elsize.medium
}
export default MySettings;
