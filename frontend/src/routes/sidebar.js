
const routes = [
  {
    path: '/app/dashboard', 
    icon: 'HomeIcon',
    name: 'Dashboard', 
  },
  {
    icon: 'HomeIcon',
    name: 'Sports',
    routes: [
      // submenu
      {
        path: '/app/football',
        name: 'Football',
      },
      {
        path: '/app/cricket',
        name: 'Cricket',
      },
      {
        path: '/app/volleyball',
        name: 'Volleyball',
      },
      {
        path: '/app/carrom',
        name: 'Carrom',
      },
      {
        path: '/app/chess',
        name: 'Chess',        
      },
    ],
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Registration Form',
  },
  {
    path: '/app/timeline',
    icon: 'HomeIcon',
    name: 'Timeline',
  },
  
  
]

export default routes
