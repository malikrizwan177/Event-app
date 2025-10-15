import { assets } from "./assets"

export const currentFilter: {text: string, bg_color: string, text_color: string, hover_bg_color: string}[] = [
    {text: 'All', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Music', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Food', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Sports', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Festivals', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Concert', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Amusement Parks', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Museums', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Art & Theater', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Shopping', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Gaming', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Night Clubs', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Spiritual', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Kids', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Logging', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Comedy', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Seasonal', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Music', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Events', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Recreation', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Fitness', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Workshop', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Cooking', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Dating', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Arts', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Dance', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Webinar', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Travel and Adventure', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
]

export const filterData: {
   data_type: string, 
   data:{
        id: string,
        img: string,
        price: string,
        month: string,
        date: string,
        location: string,
        description: string
    }[]}[] = [
  {data_type: 'All',
    data : [
      {
        id: '1111',
        img: assets.f_img1,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1112',
        img: assets.f_img2,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1113',
        img: assets.f_img3,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1114',
        img: assets.f_img4,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Music',
    data : [
      {
        id: '1115',
        img: assets.f_img2,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1116',
        img: assets.f_img4,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1117',
        img: assets.f_img1,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1118',
        img: assets.f_img3,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Food Feast',
    data : [
      {
        id: '1119',
        img: assets.f_img4,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1120',
        img: assets.f_img2,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1121',
        img: assets.f_img3,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1122',
        img: assets.f_img1,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Sports Gala',
    data : [
      {
        id: '1123',
        img: assets.f_img4,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1124',
        img: assets.f_img3,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1125',
        img: assets.f_img2,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1126',
        img: assets.f_img1,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Festivals',
    data : [
      {
        id: '1127',
        img: assets.f_img3,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1128',
        img: assets.f_img4,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1129',
        img: assets.f_img1,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1130',
        img: assets.f_img1,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
]