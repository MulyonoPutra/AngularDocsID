export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}


export const navigationSidebar: NavItem[] = [
  {
    displayName: 'Introduction',
    iconName: '',
    route: 'introduction',
  },
  {
    displayName: 'Getting Started',
    disabled: false,
    iconName: '',
    children: [
      {
        displayName: 'Try it',
        iconName: 'group',
        children: [
          {
            displayName: 'Getting Started',
            iconName: '',
            route: 'start',
          },
          {
            displayName: 'Adding Navigation',
            iconName: '',
            route: 'adding-navigation',
          },
          {
            displayName: 'Managing Data',
            iconName: '',
            route: 'managing-data',
          },
          {
            displayName: 'Using Forms for User Input',
            iconName: '',
            route: 'forms',
          },
          {
            displayName: 'Deploying Application',
            iconName: '',
            route: 'deploying-applications',
          }
        ]
      },
      {
        displayName: 'What is Angular?',
        iconName: '',
        route: 'what-is-angular',
      },
      {
        displayName: 'Setup',
        iconName: '',
        route: 'setup',
      },
    ]
  },

]
